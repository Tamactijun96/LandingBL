import { createStore } from "vuex";

export default createStore({
  state: {
    service: [
      {
        nombre: "World of Warcraft: The Lich King",
        category: "MMORPG",
        active: "true",
        image: require("@/assets/Card-lk.jpg"),
      },
      {
        nombre: "World of Warcraft: Cataclysm",
        category: "MMORPG",
        active: "true",
        image: require("@/assets/Card-cata.webp"),
      },
      {
        nombre: "World of Warcraft: BFA",
        category: "MMORPG",
        active: "true",
        image: require("@/assets/Card-bfa.webp"),
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
