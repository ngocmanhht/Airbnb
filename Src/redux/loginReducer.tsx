

const initialState = {
   loginInfor: {
        userName:'anhngoc',
        password: '123456'},
    isLogin:false,
    key:true
    

}
export default  ( state= initialState, action)=>
{
    switch(action.type)
    {
        
        case'CHANGE_PASS':
        if(action.payload=='')
        {
            return {...state,
            key: !state.key}


        }
        else
        {
            return{
                ...state,
                loginInfor:{
                    ...state.loginInfor,
                    password:action.payload
                },
                key: !state.key
        }
       
            
        }
        case'LOGIN':
        {
            if(action.payload.userName== state.loginInfor.userName&&action.payload.password==state.loginInfor.password)
            {
                return {
                    ...state,
                    isLogin: true
                }
            }
            return {
                ...state,
                isLogin: false
            }

            
        }
        
            default:
                return state;
            
    }
}