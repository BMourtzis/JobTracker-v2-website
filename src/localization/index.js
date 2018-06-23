import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { gr } from "./gr.lang";
import { en } from "./en.lang";
import store from "../store";

Vue.use(VueI18n);

const messages = { en, gr };

export const i18n = new VueI18n({
    locale: store.getters.getLanguage,
    messages
});
