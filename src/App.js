import './App.css';
import Cards from './components/Card/Cards';
import Navigate from './components/Nav/Navigate';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Card/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Card/Favorites';


function App() {
   const email = "diego@gmail.com"
   const password = "1234567"

   const Location = useLocation()     //donde esta ubicado el usuarios
   const [characters, setCharacters] =  useState([])   //el usestate retorna un array 
   const [access, setAccess] = useState(false);
   const [checkUser, SetcheckUser] = useState(true);

   const navigate = useNavigate();

   // const login =(userData) => {
   //    if(userData.email === email && userData.password === password){
   //       setAccess(true)
   //       navigate('/home')
   //    }
   // }

//* CON PROMESAS
   // const login = (userData) => {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`)
   //    .then(({ data }) => {
   //       const { access } = data;
   //       setAccess(access);
   //       access && navigate('/home');
   //    });
   // }

//* CON ASYNC
   const URL = 'http://localhost:3001/rickandmorty/login/';

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         SetcheckUser(true);
         access && navigate('/home');

      } catch (error) {
         setAccess(false);
         SetcheckUser(false);
         console.log("El usuario no tiene acceso al registro");
         console.log(error.message);
      }

   }
   
   useEffect (()=>{  //validación para que se quede en la /, y no se pueda ingresar manualmente
      !access && navigate ('/')
   },[access])


//* CON PROMESAS
   // const onSearch = (id) => {
   //    axios(`http://localhost:3001/rickandmorty/characters/${id}`).then(({ data }) => { //.then recibe la respues
   //       if (data.name) {                                      //si existe el nombre 
   //          setCharacters((oldChars) => [...oldChars, data]); //to.dos los personajes se le agrega uno nuevo

   //       } else {
   //          alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }

//* CON ASYNC
   const onSearch = async (id) => {
      try {
         const {data}= await axios(`http://localhost:3001/rickandmorty/characters/${id}`)
         console.log(data)
         if (data.name) {                                      //si existe el nombre 
            setCharacters((oldChars) => [...oldChars, data]); //to.dos los personajes se le agrega uno nuevo
         }
      } catch (error) {
         alert('¡No hay personajes con este ID!');

      }

   }

   const onClose = (id) =>{
      console.log(id)
      const setCharactersFiltered= characters.filter (character =>
         character.id != id)                                         //la id igual
      setCharacters(setCharactersFiltered)
      console.log(characters)
   }
   

   return (
      <div className='App'>
         {
            Location.pathname !== '/'           //se muestra en todo el documento menos en *
            ? <Navigate onSearch={onSearch}  setAccess= {setAccess}/>
            :null
         }
         <Routes>
            <Route path='/' element={<Form login={login} checkUser={checkUser}/>}></Route>

            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />     

            <Route path='/about' element={<About/>} />

            <Route path='/detail/:id' element={<Detail/>} />

            <Route path='/favorites' element={<Favorites/>} ></Route>
         </Routes>
      </div>
   );
}

export default App;
