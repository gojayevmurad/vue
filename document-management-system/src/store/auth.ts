import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuth: false,
  }),
  getters: {
    getIsAuth(): boolean {
      return this.isAuth;
    },
  },
  actions: {
    setIsAuth(): void {
      this.isAuth = !this.isAuth;
    },
  },
});
