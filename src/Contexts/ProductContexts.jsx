import { createContext, useState } from "react"




export const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const [products , setProducts ]  = useState(
        [    //API
          {
          id: 1,
          label: "Iphone 13",
          price: 55559
          },
          {
          id: 2,
          label: "Samsung",
          price: 20564
          },
          
          {
          id: 3,
          label: "vivo",
          price: 564
          }
          
      ]
      )
    
      const deleteProduct = (id) =>{
        let myList = products.filter(product => product.id !== id)
        setProducts(myList)
      }

      const addProduct = (item) => {

            setProducts([item , ...products])

      }

    return (
        <ProductContext.Provider value={{
            message: "salut des dev",
            "title": "AmiGos",
            products,
            setProducts,
            deleteProduct,
            addProduct
            }}>
         {children}
        </ProductContext.Provider>
    )
}