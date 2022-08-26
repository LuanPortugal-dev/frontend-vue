import { createApp } from 'vue'
import App from './App.vue'

import '../global.css';

import Cards from './components/Cards.vue'
import Header from './components/Header.vue'

import {store} from './store'

const app = createApp((App))

app.use(store)
app.component('Cards', Cards)
app.component('Header', Header)
app.mount('#app')