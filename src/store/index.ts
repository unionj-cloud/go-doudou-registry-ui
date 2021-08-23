import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRootState {
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
