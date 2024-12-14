import { createContext, useEffect, useState } from "react";
//import { food_list } from "../components/assets/assets";


export const  StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

   const url = "http://localhost:8000"

   const [cardItems,setCardItems] = useState ({})
   const [token,setToken] = useState("")
   const  [food_list, setFoodList] = useState([])

   // ---- add to card --- //
     const addToCard = (itemId) =>{
         if(!cardItems [itemId]){
             setCardItems ((prev)=>({...prev,[itemId]: 1 }))
       }
       else {
       setCardItems((prev) => ({...prev,[itemId]: prev [itemId] + 1 }))
      }}
  // ----- remove to card ---- //
    const removeFromCard = (itemId)=>{
      setCardItems ((prev)=>({...prev,[itemId]: prev[itemId] - 1}))
    }
  //-------------------------------//
 
 const getTotalCartAmount = ()=>{
  let totalAmount = 0;
   for (const item in  cardItems){
    if(cardItems[item] >0 ){
      let itemInfo = food_list.find((product)=>product._id === item);
      totalAmount += itemInfo.price * cardItems[item];
    }}
    return totalAmount;
  } 
  
  useEffect (()=>{
     if(localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
     }
  },[])

    const contextValue =  {
       food_list , 
       cardItems,
       setCardItems,
       addToCard,
       removeFromCard,
       getTotalCartAmount,
       url ,
       token,
       setToken,
    }
    
    return (
        <StoreContext.Provider value={contextValue}> 
          {props.children}
        </StoreContext.Provider>
    )
}
 export default StoreContextProvider ;

