import "primevue/resources/themes/lara-dark-blue/theme.css";
import "./assets/style.css";
import '/node_modules/primeflex/primeflex.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';





const app = createApp(App)
app.use(PrimeVue)

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Card', Card);
app.component('Dialog', Dialog);


app.mount('#app')
