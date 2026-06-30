import React,{
createContext,
useContext,
useEffect,
useState
} from "react";

const WishlistContext=createContext();

export const useWishlist=()=>useContext(WishlistContext);

export function WishlistProvider({children}){

const [wishlistItems,setWishlistItems]=useState(()=>{

const saved=localStorage.getItem("wishlist");

return saved ? JSON.parse(saved) : [];

});

useEffect(()=>{

localStorage.setItem(
"wishlist",
JSON.stringify(wishlistItems)
);

},[wishlistItems]);

const addToWishlist=(product)=>{

const exist=wishlistItems.find(
(item)=>item.id===product.id
);

if(!exist){

setWishlistItems([
...wishlistItems,
product
]);

}

};

const removeFromWishlist=(id)=>{

setWishlistItems(

wishlistItems.filter(
(item)=>item.id!==id
)

);

};

return(

<WishlistContext.Provider

value={{

wishlistItems,

addToWishlist,

removeFromWishlist

}}

>

{children}

</WishlistContext.Provider>

);

}