import { mapGetters } from "vuex";

export const authComputhed = {
  ...mapGetters(["loggedIn"])
};
