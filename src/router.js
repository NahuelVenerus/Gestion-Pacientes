
import {createWebHistory, createRouter} from 'vue-router';
import Home from './views/Home';
import MiFichaMedica from './views/MiFichaMedica';
import Agenda from './views/Agenda';
import Login from './views/Login';
import EditarTurno from './views/EditarTurno';
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
        path:'/agenda',
        name:"agenda",
        component:Agenda
    },   
    {
        path:'/login',
        name:"login",
        component:Login
    },
    {
        path:'/editarturno/:id',
        name:"editarturno",
        component:EditarTurno
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