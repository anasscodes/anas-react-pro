import { useState } from "react";




function Country() {

  let [ count, setCount ] = useState(0)

  const increment = () => {
    setCount (count + 1)
    
  }
  const reset = () => {
    setCount (0)
    
  }

  const minus = () => {
    setCount (count - 1)
    
  }

  return (

    <>

      <h2>My country</h2>
      <h4>{count}</h4>

      <button onClick={increment}>Increment</button>
      <button onClick={reset}>RST</button>
      <button onClick={minus}>Minus</button>


    </>


  )
}

export default Country