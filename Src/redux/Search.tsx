import { hotel } from "../data/hotel"

const initialState = {
    hotel,
    searchResults: []
}
export default  ( state= initialState, action)=>
{
    switch(action.type)
    {
        
        case'SEARCH':
        return {
            ...state,
            searchResults: state.hotel.filter(hotel =>
              hotel.name.toLowerCase().includes(action.payload.toLowerCase())
            )
          };

            default:
                return state;
            
    }
}