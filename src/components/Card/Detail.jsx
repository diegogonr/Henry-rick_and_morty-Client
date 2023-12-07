
import axios from "axios";
import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import './Card.css'

const Detail = ()=> {
    const {id} =useParams();                                            //Parametro qeu sale de la ruta
    const[character, setCharacter] = useState ({});                     // objetoq eu tiene la info de 1 personaje

    useEffect(() => {                                                   //hook que sirve para simular los ciclos de vida
        axios(`http://localhost:3001/rickandmorty/characters/${id}`).then(({ data }) => {    //llamada a la api
           if (data.name) {
              setCharacter(data);                                   // guarda objeto de un personaje
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});                
     }, [id]);                                  //depende del id, para no hacer llamadas infinitas

    return(
        <div className="card_detail">
        {
                character?          // ternario : if 
                <>
                        <div className="container-detail">
                            <h2>{character.name}</h2>
                            <h4>⦿{character.status}</h4>
                            <h4>⦿{character.species}</h4>
                            <h4>⦿{character.gender}</h4>
                            <h4>⦿{character.origin?.name}</h4>
                        </div>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                </>
                :null                   // else

            }
           
        </div>
    )
}
export default Detail;