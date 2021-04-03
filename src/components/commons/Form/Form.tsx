import React, { FC, useReducer, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import AppButton from 'components/commons/AppButton';
import { formsReducer } from './formReducer';

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

  const validateIsRequire = (
    name: string,
    type: string,
    hasError: boolean,
    dispatch: Function,
    isRequired: boolean,
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

  const handleChange = useCallback((text, name, validationType) => {
    onInputChange(name, validationType, text, dispatchReducer, true, false);
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
    <>
      <Component {...props} formState={formState} handleChange={handleChange} />
      <AppButton title={t('login')} handlePress={submit} />
    </>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Form;
