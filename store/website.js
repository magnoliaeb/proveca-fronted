export const state = () => ({
  showLogin: false,
  //   drawerFilter: false,
  //   showCart: false,
  //   showMenu: false,
  //   showSearch: false,
  //   showDialogInfo: false,
  //   snackbars: [],
  //   isMobile: false,
  //   dialogProduct: null,
});

export const mutations = {
  SET_SHOW_LOGIN(state, value) {
    state.showLogin = value;
  },
  //   SET_DRAWERFILTER(state, value) {
  //     state.drawerFilter = value;
  //   },
  //   SET_IS_MOBILE(state, value) {
  //     state.isMobile = value;
  //   },
  //   SET_SHOWMENU(state, value) {
  //     state.showMenu = value;
  //   },
  //   SET_SHOWCART(state, value) {
  //     state.showCart = value;
  //   },
  //   SET_SHOWSEARCH(state, value) {
  //     state.showSearch = value;
  //   },
  //   SET_SHOW_DIALOG_INFO(state, value) {
  //     state.showDialogInfo = value;
  //   },
  //   SET_DIALOG_PRODUCT(state, value) {
  //     state.dialogProduct = value;
  //     if (value) {
  //       state.showDialogInfo = true;
  //     } else {
  //       state.showDialogInfo = false;
  //     }
  //   },
};
export const actions = {
  showLogin({ commit }, value) {
    commit("SET_SHOW_LOGIN", value);
  },
  //   drawerFilter({ commit }, value) {
  //     commit("SET_DRAWERFILTER", value);
  //   },
  //   showCart({ commit }, value) {
  //     commit("SET_SHOWCART", value);
  //   },
  //   showMenu({ commit }, value) {
  //     commit("SET_SHOWMENU", value);
  //   },
  //   showSearch({ commit }, value) {
  //     commit("SET_SHOWSEARCH", value);
  //   },
  //   showDialogInfo({ commit }, value) {
  //     commit("SET_SHOW_DIALOG_INFO", value);
  //   },
  //   setDialogProduct({ commit }, value) {
  //     commit("SET_DIALOG_PRODUCT", value);
  //   },
  //   setSnackbar({ commit }, snackbar) {
  //     snackbar.id = Math.random() * 100;
  //     snackbar.showing = true;
  //     snackbar.color = snackbar.color || "success";
  //     commit("SET_SNACKBAR", snackbar);
  //   },
  //   closeSnackbar({ commit }, id) {
  //     commit("CLOSE_SNACBAR", id);
  //   },

  //   addProductToCart({ commit, dispatch }, id) {
  //     dispatch("setSnackbar", {
  //       color: "success",
  //       text: "Producto agregado al carrito",
  //     });
  //   },
  //   removeProductOnCart({ commit, dispatch }, id) {
  //     dispatch("setSnackbar", {
  //       color: "error",
  //       text: "Producto eliminado del carrito",
  //     });
  //   },
  //   mobileResize({ commit }, value) {
  //     commit("SET_IS_MOBILE", value);
  //   },
};

export const getters = {
  getShowLogin(state) {
    return state.showLogin;
  },
  //   getDrawerFilter(state) {
  //     return state.drawerFilter;
  //   },
  //   getShowCart(state) {
  //     return state.showCart;
  //   },
  //   getShowMenu(state) {
  //     return state.showMenu;
  //   },
  //   getShowSearch(state) {
  //     return state.showSearch;
  //   },
  //   getShowDialogInfo(state) {
  //     return state.showDialogInfo;
  //   },
  //   getDialogProduct(state) {
  //     return state.dialogProduct;
  //   },
  //   getShowSearch(state) {
  //     return state.showSearch;
  //   },

  //   getSnackbars(state) {
  //     return state.snackbars.filter((item) => item.showing);
  //   },
  //   getIsMobile(state) {
  //     return state.isMobile;
  //   },
};
