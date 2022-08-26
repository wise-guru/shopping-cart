import Products from "./Products";
import Catalog from "./Catalog";

function Shop() {
  return (
    <main>
      <h1>Products</h1>
      <div className="productsContainer">
        {Catalog.map((product) => {
          return (
            <Products
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              route={product.route}
              price={product.price}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Shop;
