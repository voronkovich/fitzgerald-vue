import 'tailwindcss/tailwind.css'
import './style.css'

// Old browser support
import 'promise-polyfill/src/polyfill';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
