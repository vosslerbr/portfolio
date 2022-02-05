/**
 * @description Defines the state for the Clinical Commitment calculator app
 */

import { defineStore } from 'pinia';

// the first argument is a unique id of the store across the application
export const useStore = defineStore('portfolioStore', {
  // options...
  state: () => {
    return {
      loading: false,
      errorOccurred: false,
      darkModeEnabled: false,
      contact_cards: [],
      projects: [],
      about_sections: [],
      mobileMenuOpen: false,
      currentRandomNum: 0,
    };
  },
  actions: {},
  getters: {},
});
