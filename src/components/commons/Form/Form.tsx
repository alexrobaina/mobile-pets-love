import React, { FC, useReducer, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import AppButton from 'components/commons/AppButton';
import { EMAIL, PASSWORD } from 'utils/validations/validationType';

interface Props {
  formComponentsInputs: any;
  initialState: Object;
  handleSubmit: Function;
}

const Form: FC<Props> = ({
  handleSubmit,
  initialState,
  formComponentsInputs: Component,
  ...props
}) => {
  const { t } = useTranslation();

  // Pasar a al archivo de validationSquemas de la carpeta utils
  const validateEmail = (email: string, isRequired: boolean) => {
    const regularExpretion = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = regularExpretion.test(String(email).toLowerCase());

    if (email === undefined && isRequired) {
      return {
        hasError: true,
        errorMessage: t('field_required'),
      };
    }

    if (isValid) {
      return {
        hasError: false,
        errorMessage: '',
      };
    }

    return {
      hasError: true,
      errorMessage: t('field_email'),
    };
  };

  // Pasar a al archivo de validationSquemas de la carpeta utils
  const validatePassword = (password: string, isRequired: boolean) => {
    if (password === undefined && isRequired) {
      return {
        hasError: true,
        errorMessage: t('field_required'),
      };
    }
    return {
      hasError: false,
      errorMessage: '',
    };
  };

  // se podria crear un archivo dentro de la misma carpeta del componente
  const formsReducer = (state, action) => {
    let { name, value, hasError, error, touched, type, isRequired } = action.data;
    switch (action.type) {
      case EMAIL:
        const validationEmail = validateEmail(value, isRequired);
        hasError = validationEmail?.hasError;
        error = validationEmail?.errorMessage;

        return {
          ...state,
          [name]: {
            ...state[name],
            value,
            hasError,
            error,
            touched,
            type,
            isRequired,
          },
        };
      case PASSWORD:
        let validationPassword = validatePassword(value, isRequired);
        hasError = validationPassword?.hasError;
        error = validationPassword?.errorMessage;

        return {
          ...state,
          [name]: {
            ...state[name],
            value,
            hasError,
            error,
            touched,
            type,
            isRequired,
          },
        };
      default:
        return state;
    }
  };

  const [formState, dispatchReducer] = useReducer(formsReducer, initialState);
  const dispatch = useDispatch();

  // se podria crear un archivo dentro de la misma carpeta del componente
  const onInputChange = (
    name: string,
    type: string,
    value: string,
    dispatch: any,
    touched: boolean,
    hasError: boolean,
    isRequired: boolean,
  ) => {
    dispatch({
      type: type,
      data: {
        name,
        value,
        touched,
        hasError,
        error: '',
        type: type,
        isRequired,
      },
    });
  };

  const validateIsRequire = (
    name: string,
    type: string,
    hasError: boolean,
    dispatch: Function,
    isRequired,
  ) => {
    dispatch({
      type: type,
      data: {
        name,
        hasError,
        type: type,
        isRequired,
      },
    });
  };

  const handleChange = useCallback((text, name, validationType, isRequired) => {
    onInputChange(name, validationType, text, dispatchReducer, true, false, isRequired);
  }, []);

  const submit = () => {
    let isValidate = true;
    Object.entries(formState).forEach(([key, value]) => {
      if (value.isRequired) {
        if (!value.value) {
          isValidate = false;
          validateIsRequire(key, key, true, dispatchReducer, value.isRequired);
        }
      }
    });
    if (isValidate) dispatch(handleSubmit(formState));
  };

  return (
    <View style={styles.containerLayout}>
      <Component {...props} formState={formState} handleChange={handleChange} />
      <AppButton title={t('login')} handlePress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Form;
