import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#8627E0',
                secondary: '#4889E0',
                accent: '#46A24A',
                error: '#D50000',
                success: '#46A24A',
            },
            dark: {
                primary: '#ffffff',
                secondary: '#01498E',
                accent: '#46A24A',
                error: '#D50000',
                success: '#46A24A',
            },
        },
    },
});