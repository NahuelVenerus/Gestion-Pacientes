
import {createWebHistory, createRouter} from 'vue-router';
import Home from './views/Home';
import MiFichaMedica from './views/MiFichaMedica';
import Turno from './views/Turno';
import Contador from './views/Contador';

const routes = [
    {
        path:'/',
        name:"home",
        component:Home
    },
    {
        path:'/mifichamedica',
        name:"mifichamedica",
        component:MiFichaMedica
    },
    {
        path:'/turno',
        name:"turnos",
        component:Turno
    },
    {
        path:'/contadores',
        name:"contadores",
        component:Contador
    }
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

export default router;