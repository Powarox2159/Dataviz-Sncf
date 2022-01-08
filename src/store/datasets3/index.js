
export default {
    state() {
        return {
            datasets3: {},
            datasets4: {},
            feedback: false,
            message: '',
        }
    },

    getters: {
        getDatasets3(state) {
            return state.datasets3;
        },
        getDatasets4(state) {
            return state.datasets4;
        },
        getFeedback(state) {
            return state.feedback;
        },
        getMessage(state) {
            return state.message;
        }
    },

    actions: {
        updateDatasets3({commit}, list) {
            commit('UPDATEDATASETS3', list);
        },
        updateDatasets4({commit}, list) {
            commit('UPDATEDATASETS4', list);
        },
        addMessage({commit}, mess){
            commit('ADDMESSAGE', mess);
        },
        addFeedback({commit}){
            commit('ADDFEEDBACK');
        },
        delFeedback({commit}){
            commit('DELFEEDBACK');
        },
    },

    mutations: {
        UPDATEDATASETS3(state, list) {
            state.datasets3 = list;
        },
        UPDATEDATASETS4(state, list) {
            state.datasets4 = list;
        },
        ADDMESSAGE(state, mess) {
            state.message = mess;
        },
        ADDFEEDBACK(state) {
            state.feedback = true;
        },
        DELFEEDBACK(state){
            state.feedback = false;
        }
    }
}
