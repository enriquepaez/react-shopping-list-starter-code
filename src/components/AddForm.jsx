import { useState } from "react"

function AddForm({allProducts, setAllProducts}) {

  const [ nameValue, setNameValue ] = useState("")
  const [ priceValue, setPriceValue ] = useState(0)

  const handleNameChange = (event) => setNameValue(event.target.value)
  const handlePriceChange = (event) => setPriceValue(event.target.value)

  const handleAddProduct = (event) => {
    event.preventDefault() // remueve los comportamientos predeterminados de este evento

    // 1. recopilar el producto a crear
    const newProduct = {
      name: nameValue,
      price: priceValue,
      isPurchased: false // valor inicial
    }

    // 2. agregarlo a donde están todos los productos
    // const clone = [...allProducts]
    // clone.unshift(newProduct)
    // setAllProducts(clone)

    // setAllProducts((elValorActualDelEstado) => {
      // retornamos lo que queremos que sea el nuevo valor
      // const clone = [...elValorActualDelEstado]
      // clone.unshift(newProduct)
      // setAllProducts(clone)
      // }

      // sintaxis avanzada
      setAllProducts((current) => [newProduct, ...current])
  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleAddProduct}>

        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={handleNameChange} value={nameValue}  type="text" name="name" />
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input onChange={handlePriceChange} value={priceValue} type="number" name="price" />
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm