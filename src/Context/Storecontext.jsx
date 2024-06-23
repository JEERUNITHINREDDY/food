import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";

export const Storecontext = createContext(null)

const Storecontextprovider = (props) => {

    const [cartitems, setcartitems] = useState({})

    const addtocart = (itemId) => {
        if (!cartitems[itemId]) {
            setcartitems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removefromcart = (itemId) => {
        setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const gettotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item)
                totalamount += iteminfo.price * cartitems[item];
            }
        }
        return totalamount;
    }

    

    const contextvalue = {
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart,
        gettotalcartamount
    }
    return (
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default Storecontextprovider