import React, { FC, useReducer, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
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

  const handleChange = useCallback((text, name, validationType, isRequired) => {
    onInputChange(name, validationType, text, dispatchReducer, true, false, isRequired);
  }, []);

  const submit = () => {
    let isValidate = true;
    Object.entries(formState).forEach(([key, value]: any) => {
      if (value.hasError) isValidate = false;
      if (value.isRequired) {
        if (value.value === '' || value.value === undefined) {
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

export default Form;
