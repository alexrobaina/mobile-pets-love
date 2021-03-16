import { makeAutoObservable } from 'mobx';
import Validation from 'utils/validations/Validation';

interface IInputs {
  value: string;
  error: boolean;
  errorMessage: string;
  validation: Validation;
}

class InputStore implements IInputs {
  value;
  error;
  isLoading;
  validation;
  errorMessage;

  constructor() {
    this.value = '';
    this.error = false;
    this.isLoading = false;
    this.errorMessage = '';
    this.validation = null;

    makeAutoObservable(this);
  }

  setValidation(validationType: string) {
    this.validation = new Validation(validationType);
    this.clearError();
  }

  setValue(value) {
    this.value = value;
    this.clearError();
  }

  setError(errorMessage: string) {
    this.error = true;
    this.errorMessage = errorMessage;
  }

  clearError() {
    this.error = false;
    this.errorMessage = '';
  }

  validate(password: string) {
    let result;
    if (password) {
      result = this.validation.checkValidation(this, password);
      return result;
    }
    result = this.validation.checkValidation(this);
    return result;
  }
}

export default InputStore;
