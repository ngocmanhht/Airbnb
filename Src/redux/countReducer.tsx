

const initialState = {
    day:0,
    price:0
    
}
export default  ( state= initialState, action)=>
{
    switch(action.type)
    {
        
        case'INCREASE_DAY':
        return{
            ...state,
            day: state.day+1,
            price: (state.day+1)*(action.payload)
        }
        case'DECREASE_DAY':
        return{
            ...state,
            day: state.day-1,
            price: (state.day-1)*(action.payload)

        }
        case'RESET':
        return{
            ...state,
            day: 0,
            price: 0

        }
            default:
                return state;
            
    }
}