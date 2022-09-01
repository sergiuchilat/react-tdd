export default function ProductsPage({products}){
  return (
    <>
      <h2>Products</h2>
      <div>
        <ul>
          {
            products && products.map(product => (
              <li key={product.id}>{product.id} - {product.name} - {product.price} USD</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}