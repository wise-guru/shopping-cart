import Products from "./Products";

function Shop(props) {
  const { addProduct, products } = props;
  return (
    <main>
      <h1 className="pTitle">Products</h1>
      <div className="productsContainer">
        {products.map((product) => {
          return (
            <Products
              product={product}
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              route={product.route}
              price={product.price}
              addProduct={addProduct}
              item={products.find((item) => item.id === product.id)}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Shop;
