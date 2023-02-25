export const state = () => ({
	showLogin: false,
	showRegister: false,
	showFilters: false,
	showProfile: false,
	showCart: false,
	showMenu: false,
});

export const mutations = {
	SET_SHOW_LOGIN(state, value) {
		state.showLogin = value;
	},
	SET_SHOW_REGISTER(state, value) {
		state.showRegister = value;
	},
	SET_SHOW_FILTERS(state, value) {
		state.showFilters = value;
	},
	SET_SHOW_PROFILE(state, value) {
		state.showProfile = value;
	},
	SET_SHOW_CART(state, value) {
		state.showCart = value;
	},
	SET_SHOW_MENU(state, value) {
		state.showMenu = value;
	},
};
export const actions = {
	showLogin({ commit }, value) {
		commit('SET_SHOW_LOGIN', value);
	},
	showRegister({ commit }, value) {
		commit('SET_SHOW_REGISTER', value);
	},
	showFilters({ commit }, value) {
		commit('SET_SHOW_FILTERS', value);
	},
	showProfile({ commit }, value) {
		commit('SET_SHOW_PROFILE', value);
	},
	showCart({ commit }, value) {
		commit('SET_SHOW_CART', value);
	},
	showMenu({ commit }, value) {
		commit('SET_SHOW_MENU', value);
	},
};

export const getters = {
	getShowLogin(state) {
		return state.showLogin;
	},
	getShowRegister(state) {
		return state.showRegister;
	},
	getShowFilters(state) {
		return state.showFilters;
	},
	getShowProfile(state) {
		return state.showProfile;
	},
	getShowCart(state) {
		return state.showCart;
	},
	getShowMenu(state) {
		return state.showMenu;
	},
};
