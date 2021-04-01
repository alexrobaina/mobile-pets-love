import React, { FC, useReducer, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import AppButton from 'components/commons/AppButton';
import { EMAIL } from 'utils/validations/validationType';

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

  const validateEmail = (email: string) => {
    const regularExpretion = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = regularExpretion.test(String(email).toLowerCase());
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

  const formsReducer = (state, action) => {
    let { name, value, hasError, error, touched, type } = action.data;

    switch (action.type) {
      case EMAIL:
        const validation = validateEmail(value);
        hasError = validation?.hasError;
        error = validation?.errorMessage;
        return {
          ...state,
          [name]: { ...state[name], value, hasError, error, touched, type },
        };
      default:
        return state;
    }
  };

  const [formState, dispatchReducer] = useReducer(formsReducer, initialState);
  const dispatch = useDispatch();

  const onInputChange = (
    name: string,
    type: string,
    value: string,
    dispatch: any,
    touched: boolean,
    hasError: boolean,
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
      },
    });
  };

  const handleChange = useCallback((text, name, validationType) => {
    onInputChange(name, validationType, text, dispatchReducer, true, false);
  }, []);

  const submit = () => {
    dispatch(handleSubmit(formState));
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
