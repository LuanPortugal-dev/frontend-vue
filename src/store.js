import { createStore } from "vuex";

import { search_product } from "./services/api";

const store = createStore({
  state() {
    return {
      name_product: "dorflex",
      products: []
    };
  },
  mutations: {
    update_name(state, payload) {
      state.name_product = payload;
    },
    update_product(state, payload){
      state.products = payload
    }
  },
  actions: {
    update(context, payload) {
      context.commit("update_name", payload);
    },
    search(context) {
      search_product(context.state.name_product).then((response) => {
        context.commit("update_product", response.data);
      });
    },
  },
});

export { store };
