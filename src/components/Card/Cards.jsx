import Card from './Card';
import './Card.css'
import Home from '../Home/Home'
export default function Cards({characters, onClose}) {

   console.log("characters", characters)
   return (
      <>
       {characters.length?
         (<div className='containerCards'>
            
            { 
               characters.map (({id, name, status, species, gender, origin, image}) => {
                        return (
                           <Card 
                              key = {id} // uso interno de react
                              id = {id}
                              name={name}
                              status={status}
                              species={species}
                              gender={gender}
                              image={image}
                              origin={origin.name}
                              onClose={onClose}
                           />
                        )
                     })               
            } 

         </div>):
         
         <Home message={"Agregar Personajes"}/>
      }
      </>
   )
}
