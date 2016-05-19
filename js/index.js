import 'css/main.css';
import Vue from 'vue';
import Game from './game/Game';
import store from 'js/vuex/store/store';


/* eslint-disable no-new */
new Vue({el: 'body', components: {Game}, store});
