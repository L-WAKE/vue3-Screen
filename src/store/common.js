import { defineStore } from "pinia";

export const commonStore = defineStore("common-store", {
  state: () => ({
    token: null,
  }),
  getters: {},
  actions: {
    setButtonPower(list) {
      this.buttonPower = list;
    },
  },
});
