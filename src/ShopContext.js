import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {

  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedProduct = state.products.concat(product);
    dispatch({
        type: "ADD_TO_CART",
        payload: {
            products: updatedProduct
        }
    });
};


  const removeFromCart = (product) => {
        const updatedProduct = state.products.filter(p => p.id!== 
            product.id);

             dispatch({
               type: "REMOVE_FROM_CART",
               payload: {
                 products: updatedProduct,
               },
             });
  }


            const values = {
                products: state.products,
                total: state.total,
                addToCart,
                removeFromCart
            }

        return <ShopContext.Provider value={values}>
            {children}
        </ShopContext.Provider>
};

 const useShop = () => {
    const context = useContext(ShopContext);
    if(context === undefined) {
        throw new Error("context must be used within a ShopContext");
    }
    return context;
 };

 export default useShop;
