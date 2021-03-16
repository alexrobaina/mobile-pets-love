import {
  runInAction,
  makeObservable,
  observable,
  action,
  makeAutoObservable,
} from 'mobx';
import AuthService from 'services/AuthService';
import { EMAIL, REQUIRED } from 'utils/validations/validationType';
import InputStore from 'stores/InputStore';

interface IAuthStore {
  email: string;
  password: string;
  errorLogin: string;
  isLoading: boolean;
  validationError: boolean;
  authService: AuthService;
  user: Array<number, boolean, string>;
}

class AuthStore implements IAuthStore {
  user;
  email;
  password;
  isLoading;
  errorLogin;
  authService;
  validationError;

  constructor() {
    this.user = [];
    this.errorLogin = '';
    this.isLoading = false;
    this.validationError = false;
    this.email = new InputStore();
    this.password = new InputStore();
    this.authService = new AuthService();

    makeAutoObservable(this);

    this.setValidationInputs();
  }

  setValidationInputs() {
    this.email.setValidation(EMAIL);
    this.password.setValidation(REQUIRED);
  }

  async login() {
    this.resetErrors();
    await this.validate();

    if (this.validationError) {
      this.setLoading(true);
      try {
        const data = {
          email: this.email.value,
          password: this.password.value,
        };

        const response = await this.authService.login(data);
        console.log(response);
        runInAction(() => {
          this.setLoading(false);
          this.user = response;
        });
      } catch (e) {
        runInAction(() => {
          this.setLoading(false);
          if (e?.response?.data?.message) {
            this.errorLogin = e.response.data.message;
          }
        });
      }
    }
  }

  async loadUser() {
    try {
      const response = await this.authService.getUserId(this.user._id);

      runInAction(() => {
        this.user = response;
      });
    } catch (e) {
      runInAction(() => {
        console.log(e);
      });
    }
  }

  setLoading(value) {
    this.isLoading = value;
  }

  setEmail(email: string) {
    this.email.setValue(email);
  }
  setPassword(password: string) {
    this.password.setValue(password);
  }

  resetErrors() {
    this.errorLogin = '';
  }

  clearErrors() {
    this.email.clearError();
    this.password.clearError();
  }

  async validate() {
    this.clearErrors();

    await this.email.validate();
    await this.password.validate();

    runInAction(() => {
      this.validationError = !(this.email.error || this.password.error);
    });
  }
}

export default AuthStore;
