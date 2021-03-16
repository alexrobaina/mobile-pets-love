import { makeObservable, observable, action } from 'mobx';

interface IApiStore {
  isLoading: boolean;
}

class ApiStore implements IApiStore {
  isLoading;
  constructor() {
    makeObservable(this, {
      // Observable
      isLoading: observable,
      // Actions
      setLoading: action,
    });

    this.isLoading = false;
  }

  setLoading(value: boolean) {
    this.isLoading = value;
  }
}

export default ApiStore;
