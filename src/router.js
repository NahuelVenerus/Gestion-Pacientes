
import {createWebHistory, createRouter} from 'vue-router';
import Home from './views/Home';
import MiFichaMedica from './views/MiFichaMedica';
import Pacientes from './views/Pacientes';
import Turnos from './views/Turnos';
import verTurnos from './views/verTurno';
import VerPaciente from './views/VerPaciente';
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
        path:'/pacientes',
        name:"pacientes",
        component:Pacientes
    },
    {
        path:'/turnos',
        name:"turnos",
        component:Turnos
    },
    {
        path:'/verturno',
        name:"verTurno",
        component:verTurnos
    },
    
    {path:'/verpaciente',
    name:"verpaciente",
    component:VerPaciente
}
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

export default router;