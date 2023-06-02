import "./assets/main.css";

import {
	createApp
} from "vue";
import App from "./App.vue";
import router from "./router";

import {
	initializeApp
} from "firebase/app";
import {
	getAnalytics
} from "firebase/analytics";

const app = createApp(App);
app.use(router);
app.mount("#app");

const firebaseConfig = {
	apiKey: "AIzaSyCvpXdQS_xzMBcMe4WCFKYBfaK04RWUzD4",
	authDomain: "simplefreetube.firebaseapp.com",
	projectId: "simplefreetube",
	storageBucket: "simplefreetube.appspot.com",
	messagingSenderId: "45166058154",
	appId: "1:45166058154:web:d393fd61478947fac2ced3",
	measurementId: "G-KBT3S4QZZ9",
};

Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(Firebaseapp);