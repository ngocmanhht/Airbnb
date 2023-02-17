
export const watchHotel =(id)=>
{
    return {
        type: 'WATCH_HOTEL',
        payload:id
    }
}
export const isClicked =(data)=>
{
    return {
        type: 'IS_CLICKED',
        payload:data
    }
}
export const increase =(price)=>
{
    return {
        type: 'INCREASE_DAY',
        payload: Number(price)
    }
}
export const decrease =(price)=>
{
    return {
        type: 'DECREASE_DAY',
        payload: Number(price)
    }
}
export const reset =()=>
{
    return {
        type: 'RESET',
        
    }
}
export const searchPlace =(name)=>
{
    return {
        type: 'SEARCH',
        payload:name
    }
}
export const addToFlavor =(data)=>
{
    return {
        type: 'ADD_TO_FLAVOR',
        payload:data
    }
}
export const showFlavor =()=>
{
    return {
        type: 'SHOW_FLAVOR',
        
    }
}
export const changePass =(pass)=>
{
    return {
        type: 'CHANGE_PASS',
        payload: pass
        
    }
}
export const login =(data)=>
{
    return {
        type: 'LOGIN',
        payload: data
        
    }
}
export const getData =()=>
{
    return dispatch => {
        return fetch('https://run.mocky.io/v3/2efbf61c-0000-45f4-9daa-a73ebfe2abb8')
          .then(response => response.json())
          .then(data => {
            dispatch({ type: 'GET_DATA', payload: data.hotel });
          })
          .catch(error => console.log(error));
        }
}