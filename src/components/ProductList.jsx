import ProductCard from "./ProductCard";

function ProductList({allProducts, searchValue, setAllProducts}) {
  return (
    <div className="product-list container">
      
      <h2>Product List</h2>

      {/* //* the list of the products will be here */}
      {/* //* it will render a ProductCard for each product in the list */}
      {allProducts
      .filter((eachProduct) => eachProduct.name.includes(searchValue))
      .map((eachProduct, index) =>
        <ProductCard key={index} eachProduct={eachProduct} index={index} setAllProducts={setAllProducts}/>)}
    </div>
  )
}

export default ProductList