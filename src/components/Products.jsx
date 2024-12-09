import Country from "./Country"
import Product from "./Product"
import { useState, useContext , useRef} from "react"
import { v4 as uuid} from 'uuid';
import { ProductContext } from "../Contexts/ProductContexts"





function Products() {

  const title = useRef("");
  const price = useRef(0);

  const { products , addProduct } = useContext(ProductContext)
    
 
// **************************************************************
    // Destruct
  // const { name, city, } = products; 
    //backtik
    //  console.log(`My name is ${name} and I live in ${city}`); 

// **************************************************************


 
  const [message , setMessage] = useState("")


  const titleInput = (e) => {
    if(e.target.value === ""){
      setMessage("Title is required !")
    }else if(e.target.value.trim().length < 3){
      setMessage("please tape more than 3 caractres")
    }
    else{
      setMessage(null)
      
    }
    
  }

  const priceInput = (e) => {
    
    }

    const submitForm = (e) =>{
      e.preventDefault();

      let myProduct = {

        id: uuid(),
        label: title.current.value,
        price: price.current.value

      }

      console.log(myProduct);
      
    
      addProduct(myProduct)

       title.current.value = ""
       price.current.value = 0
      
    }


let  showList = true



  return (
    <>

        <h1>Hello Everone</h1>

        <form onSubmit={submitForm}>

          <div className="form-group my-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input id="title" ref={title}  onChange={titleInput} type="text" className="form-control"/>
              {
                message && (
                <div className="alert alert-danger">{message}</div>
                )
              }
          </div>

          <div className="form-group my-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input id="price" ref={price} onChange={priceInput} type="number" className="form-control"/>
          </div>
          <button className="btn btn-info my-2 mb-4">Save</button>

        </form>
            
        
        <Country/>

        {
          showList && (
            
            <div>
            
                {products.map( (product, index) => (<div key={index}>

                      <Product id={product.id} >
                          <div className="card-body">
                            <h4 className="card-title">{product.label}</h4>
                            <p className="card-text"><button className="btn btn-success">{product.price}</button></p>
                          </div>
                      </Product>
                      
                      </div>
                ))}
    
            </div>
          )
        }

        

    </>
  )
}

export default Products