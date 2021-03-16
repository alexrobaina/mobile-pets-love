import AuthStore from './AuthStore';

interface IRootStore {
  authStore: AuthStore;
}

class RootStore implements IRootStore {
  authStore;

  constructor() {
    this.authStore = new AuthStore();
  }
}

export default RootStore;
