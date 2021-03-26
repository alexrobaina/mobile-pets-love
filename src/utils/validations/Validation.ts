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

  async checkValidation(value: string | number, password?: string) {
    if (this.validationSchema) {
      try {
        if (this.type === CONFIRM_PASSWORD) {
          await this.validationSchema.validate({
            confirmPassword: value,
            password: password || '',
          });
        } else {
          await this.validationSchema.validate({ value: value });
        }

        return true;
      } catch (e) {
        return e.message;
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
