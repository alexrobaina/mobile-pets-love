import axios from 'axios';

const axiosInterseptors = (rootStore) => {
  axios.interseptor.request.use((config) => {
    if (rootStore.authStore.getTokenLocalStorage()) {
      config.headers.Authorization = rootStore.authStore.getTokenLocalStorage()
        ? `Bearer ${rootStore.authStore.getTokenLocalStorage()}`
        : null;
    }
  });
};
