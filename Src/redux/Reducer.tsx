
import { title } from "../data/title";
import { isClicked } from "./Action";
const initialState = title
export default  ( state= initialState, action)=>
{
    switch(action.type)
    {
        
        case 'IS_CLICKED':  
        return state.map((item)=>{
            if(item.clicked==true)
            {
                return{
                    ...item,
                    clicked:false
                }
            }
            if(item.title.toLowerCase()==action.payload.title.toLowerCase())
            {
                return{
                    ...item,
                    clicked:action.payload.clicked
                }
            }
            return item;
        })
            default:
                return state;
            
    }
}