import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

const initialState={
    myFavorites : [],
    allCharactersFav: []
}

const reducer=(state= initialState, action)=> {
    switch (action.type) {
        case ADD_FAV:
            // return{
            //     ...state,
            //     myFavorites: [...state.allCharactersFav, action.payload],
            //     allCharactersFav:  [...state.allCharactersFav, action.payload]
            // }
            return { 
                ...state,
                 myFavorites: action.payload, 
                 allCharactersFav: action.payload 
            };

        case REMOVE_FAV:
            // return{
            //     ...state,
            //     myFavorites: state.myFavorites.filter (fav => fav.id!== action.payload)    //devolver todos los fav diferente a los de id
            // }
                return { 
                    ...state, 
                    myFavorites: action.payload,
                    allCharactersFav: action.payload 
 
                };


        case FILTER:
            const allCharactersFiltered = state.allCharactersFav.filter (character => 
                character.gender == action.payload)
            return{
                ...state,
                myFavorites:
                action.payload == 'allCharacters'
                ?[...state.allCharactersFav]   //regresar lo mismo si es allCharacters
                : allCharactersFiltered
            }

        case ORDER:
            const allCharactersFavCopy= [...state.allCharactersFav]
            return{
                ...state,
                myFavorites:      
                    action.payload=='A' 
                    ? allCharactersFavCopy.sort((a,b) => a.name.localeCompare(b.name))   //de menor a mayor
                    : allCharactersFavCopy.sort((a,b) => b.name.localeCompare(a.name))   //de mayor a menor
            }

        default:
            return{
                ...state
            }
    }
}

export default reducer;