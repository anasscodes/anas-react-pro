import { useParams , useNavigate } from "react-router-dom"
import { ProductContext } from "../Contexts/ProductContexts"
import { useContext , useState } from "react"
const ShowProduct = () => {
  
  const myParams = useParams()

  const { products} = useContext(ProductContext)
  const myProduct = products.find(product => product.id === +myParams.id)
  const [product, setProduct] = useState(myProduct)

    
    console.log(myParams);

   

    const Navigate = useNavigate()

    const redirectToHom = () => {
        Navigate("/")
    }

  return (
    <>
    <h1>{product.label}</h1>
    <button className="btn btn-success">{product.price}</button>
       <button  onClick={redirectToHom}>Redirect</button>
    </>
  )
}

export default ShowProduct