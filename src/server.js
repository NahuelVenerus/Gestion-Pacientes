const express =  require('express');
const cors =  require('cors');
const moment = require('moment');
const app = express();

app.use(cors());
const ROL_PACIENTE = "PACIENTE";
const ROL_PROFESIONAL = "PROFESIONAL";
const logins = [
    {
        id:1,
        dni:1,
        password:"1",
        idPaciente:1,
        idProfesional:null
    },
    {
        id:2,
        dni:22222222,
        password:"12345678",
        idPaciente:2,
        idProfesional:null
    },
    {
        id:3,
        dni:3,
        password:"3",
        idPaciente:null,
        idProfesional:1
    }
]
const profesional = {
    id:1,
    nombre:"Dr. Chapatin",
    apellido:"Bolaño"
}
const pacientes = [
    {
        id:1,
        nombre:"Pepe",
        apellido:"Argento",
        fechaNacimiento: moment("1985-10-19") ,
        obraSocial:"OSDE",
        email:"pepe.argento@hotmail.com",
        celular:"11111111111"


    }
]

const historial = [
    {
        id:"1",
        dia:"07/11/2021",
        descripcion:"Esto es un ejemplo",
        idPaciente:1
    },
    {
        id:"2",
        dia:"06/11/2021",
        descripcion:"Esto es un ejemplo",
        idPaciente:1
    },
    {
        id:"3",
        dia:"05/11/2021",
        descripcion:"Esto es un ejemplo",
        idPaciente:2
    },
  ];

const turnosPaciente = [
    {
        id:'1',
        fecha: moment("2021-12-07"),
        horarioInicio: '9:00',
        idPaciente: 1,
        descripcion: 'Fiebre',
        estado:"Pendiente"
    },
    {
        id:'2',
        fecha: moment("2021-12-08"),
        horarioInicio: '9:00',
        idPaciente: 2,
        descripcion: 'Dolor de cabeza',
        estado:"Pendiente"
    }
];

app.get('/login', (req,res) => {
    const {dni, password} = req.headers;
    console.log(req.headers)
    const login = logins.find(item => {return item.dni == dni && item.password == password});
    console.log(login)
    if(!login){
        res.status(400).send({
            message: 'El DNI o el Password son incorrectos'
        });
    }else{
        if(login.idPaciente){
            let paciente = pacientes.find(item => item.id == login.idPaciente);
            paciente.rol = ROL_PACIENTE
            paciente.idLogin = login.id;
            res.json(paciente);
        }else{
            let _profesional = profesional;
            _profesional.rol = ROL_PROFESIONAL
            _profesional.idLogin = login.id;
            res.json(profesional);
        }
    }

    
})
app.get('/turnospaciente', (req,res) => {
    res.json(turnosPaciente)
})
app.get('/turnospaciente/:idpaciente', (req,res) => {
    res.json(turnosPaciente)
})
app.get('/turno/:id', (req,res) => {
    const id = req.params.id;
    const turno = turnosPaciente.find(item => item.id == id)
    res.json(turno)
})
app.get('/historial', (req,res) => {
    // throw new Exception("esto es un error");
    res.json(historial)
}) 
app.listen(3000);

