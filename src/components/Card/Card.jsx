import {Link} from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import {connect} from 'react-redux'
import { useState, useEffect } from 'react';
import "./Card.css";

function Card({id, name, species, gender, image, onClose, fav, addFav, removeFav, myFavorites, }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav) {
         setIsFav(false);
         removeFav (id)
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);



   return (
      // <div>
      //    {/* la funcion no se ejecuta porque se ejecuta cuando sucede el evento */}
      //    <button onClick={handleFavorite}>{isFav? '❤️' : '🤍'}</button>
      //    <button onClick={()=>onClose(id)}>X</button>   
      //    <Link to={`/detail/${id}`}>
      //       <h2>{name}</h2>
      //    </Link>

      //    <h2>{species}</h2>
      //    <h2>{gender}</h2>
      //    <img src={image} alt='' />
      // </div> 
     
      <div className="card ">
         {!fav?
               <div className='buttonClose'>
                  <button onClick={()=>onClose(id)}>X</button> 
               </div> :null}
         <h1 className="title" >{name}</h1>
         <Link to={`/detail/${id}`}>
            <img
               src={image}
               alt="Rick and morty"
               className="sneaaker-img"
            />
         </Link>

         <ul className="sizes-box">
          <li >{species}</li>
          <li >{gender}</li>
        </ul>
        <div className="button-box">
          <button className="purchase"  onClick={handleFavorite}>{isFav? '❤️' : '🤍'} </button>
        </div>

      </div>

   );
}

const mapStateToProps = (state) =>{ 
   return{
      myFavorites: state.myFavorites

   }
}

const mapDispatchToProps =(dispatch) =>{
   return{
      addFav: (character) => {dispatch(addFav(character))},   //se ejecuta la función porque requiero el objeto de retorno de addFav
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}


export default connect (
   mapStateToProps,
   mapDispatchToProps
)(Card);