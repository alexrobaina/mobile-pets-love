import { makeAutoObservable } from 'mobx';

interface IInternalInputStore {
  secureTextEntry: boolean;
}

class InternalInputStore implements IInternalInputStore {
  secureTextEntry;
  constructor() {
    this.secureTextEntry = false;
    makeAutoObservable(this);
  }

  setSecureTextEntry() {
    this.secureTextEntry = !this.secureTextEntry;
  }
}

export default InternalInputStore;
