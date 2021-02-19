import { makeAutoObservable } from 'mobx';
import Validation from 'utils/validations/Validation';

interface IInputStore {
  error?: boolean;
  validation: object;
  isValidate: Function;
  errorMessage?: string;
  value?: number | string;
  validationType?: string;
  validationSchema: Function;
}

class InputStore implements IInputStore {
  error;
  value;
  errorMessage;
  validationType;
  isValidate: any;
  validationSchema: any;
  validation: any;

  constructor(validationType = '') {
    this.error = false;
    this.value = '';
    this.errorMessage = '';
    this.isValidate = null;
    this.validationSchema = null;
    this.validationType = validationType;
    this.validation = null;

    if (validationType !== '') {
      this.validation = new Validation(validationType);
    }

    makeAutoObservable(this);
  }

  setError(errorMessage: string) {
    this.error = true;
    this.errorMessage = errorMessage;
  }

  setValue(value: any) {
    this.value = value || '' || 0;
    this.clearError();
  }

  clearError() {
    this.error = false;
    this.errorMessage = '';
  }

  async validate() {
    await this.validation.checkValidation(this);
  }
}

export default InputStore;
