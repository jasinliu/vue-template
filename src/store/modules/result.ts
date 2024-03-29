import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { result: null };
  },
});
