import firebase from "firebase";

export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                throw new Error (e)
            }
        },
        async logout() {
            await firebase.auth().signOut();
        },
        async registr({dispatch}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                const uid = await dispatch('getUid');
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 10000,
                    name: name
                })
            } catch (e) {
                throw new Error (e)
            }
        },
        getUid() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        }
    }
}
