import Card from "./Card";
import {connect, useDispatch} from 'react-redux'
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import './Card.css'
import Home from '../Home/Home'

const Favorites =({myFavorites})=>{

    console.log(myFavorites);
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event)=> {
        dispatch(orderCards(event.target.value));      //se ejecuta porque se quiere su retorno
        setAux(true);
    }
    const handleFilter = (event)=> {
        dispatch(filterCards(event.target.value));      //se ejecuta porque se quiere su retorno
    }

    return(
        <>
          <select className="card_filter" onChange={handleOrder}>
                <option value="A">ASCENDENTE</option>
                <option value="D">DESCENDENTE</option>
            </select>
            
            <select className="card_filter" onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">allCharacters</option>
            </select>
           {myFavorites.length?
            (<div className='containerCards'>
                { 
                    myFavorites?.map ( fav =>{
                        return (
                            <Card 
                            key = {fav.id} // uso interno de react
                            id = {fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                            fav={true}
                        />
                        )
                    })
                }
             </div>):
            <Home message={"No hay personajes Favoritos"}/>
            }
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);