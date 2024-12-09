import PropTypes from 'prop-types'
import { ProductContext } from "../Contexts/ProductContexts"
import { useContext } from 'react'

function Product({children,onDeleteProduct,id}) {

    const { deleteProduct } = useContext(ProductContext)

  return (
    <>
   
      <div className="my-4">

        <div className="card text-white bg-warning mb-3 my-4" >
          
          {children}
          
        </div>

        <button onClick={() => deleteProduct(id)} className='btn btn-dark'>Delete</button>

      </div>
      
    
    </>
  )
}

    // validation**
Product.PropType = {
  label : PropTypes.string,
  price : PropTypes.number.isRequired
}

    // Changed**
Product.defaultProps = {
  label : "solde out",
  price  : 0
}



export default Product