
function ProductCard({eachProduct, index, setAllProducts}) {

  const handleBuy = () => {
    console.log("intentando marcar este producto como comprado", index)

    setAllProducts((currentState) => {
      console.log(currentState)

      // modificar un objeto del array (sin mutar el original)
      // hacemos un clone DEEP
      const clone = structuredClone(currentState)

      //modificamos el elemento en la posición que queremos modificar
      clone[index].isPurchased = true

      // retornar el nuevo valor de todo el estado
      return clone
    })
  }

  return (
    <div className="product-card" >
      <h3>{eachProduct.name}</h3>
      <p>{eachProduct.price}€</p>
      <p>{eachProduct.isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  )
}

export default ProductCard