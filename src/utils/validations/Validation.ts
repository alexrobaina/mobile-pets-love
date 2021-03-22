import validationSchemas from 'utils/validations/validationSchemas';
import {
  EMAIL,
  REQUIRED,
  PASSWORD,
  PASSWORD_EDIT,
  CONFIRM_PASSWORD,
} from 'utils/validations/validationType';

interface Props {
  validationSchema: Function;
  type: string;
}

class Validation implements Props {
  type;
  validationSchema: any;

  constructor() {
    this.validationSchema = null;
    this.type = '';
  }

  setTypeValidation(type: string) {
    this.type = type;
    this.setValidateSchema();
  }

  async checkValidation(store: any, password?: string) {
    if (this.validationSchema) {
      try {
        if (this.type === CONFIRM_PASSWORD) {
          await this.validationSchema.validate({
            confirmPassword: store.value,
            password: password || '',
          });
        } else {
          await this.validationSchema.validate({ value: store.value });
        }

        return true;
      } catch (e) {
        store.setError(e.message);
        return false;
      }
    }
  }

  setValidateSchema() {
    this.validationSchema = null;
    switch (this.type) {
      case EMAIL:
        this.validationSchema = validationSchemas.emailValidation;
        break;
      case REQUIRED:
        this.validationSchema = validationSchemas.requiredValidation;
        break;
      case PASSWORD:
        this.validationSchema = validationSchemas.passwordValidation;
        break;
      case CONFIRM_PASSWORD:
        this.validationSchema = validationSchemas.confirmPasswordValidation;
        break;
      case PASSWORD_EDIT:
        this.validationSchema = validationSchemas.confirmPasswordEditValidation;
        break;
      default:
        break;
    }
  }
}

export default Validation;
