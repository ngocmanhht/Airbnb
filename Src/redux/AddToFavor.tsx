import { hotel } from "../data/hotel"


const initialState = {
    hotel:[],
    favorResults: [],
    searchResults: [],
}
export default  ( state= initialState, action)=>
{
    switch(action.type)
    {
        
        case'ADD_TO_FLAVOR':
        return {
            ...state,
            hotel: state.hotel.map((item)=> {

                if(item.name== action.payload.name)
                {
                    return{
                        ...item,
                        favor: action.payload.favor
                    }
                }
                return item
            })
          };
          case'SHOW_FLAVOR':
        return {
            ...state,
            favorResults: state.hotel.filter(item => item.favor=== true)
          };
          case'SEARCH':
        return {
            ...state,
            searchResults: state.hotel.filter(hotel =>
              hotel.name.toLowerCase().includes(action.payload.toLowerCase())
            )
          };
          case'GET_DATA':
          return {
              ...state,
              hotel:action.payload
            };

            default:
                return state;
            
    }
}