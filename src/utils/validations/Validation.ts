import { makeAutoObservable } from 'mobx';
import validationSchemas from 'utils/validations/validationSchemas';
import { EMAIL, REQUIRED } from 'utils/validations/typeValidations';
interface Props {
  validationSchema: Function;
  type: string;
}

class Validation implements Props {
  type;
  validationSchema: any;

  constructor(type: string) {
    this.validationSchema = null;
    this.type = type;

    makeAutoObservable(this);

    this.setValidateSchema();
  }

  async checkValidation(store: any) {
    if (this.validationSchema) {
      try {
        await this.validationSchema.validate({ value: store.value });
      } catch (e) {
        store.setError(e.message);
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
      default:
        break;
    }
  }
}

export default Validation;
