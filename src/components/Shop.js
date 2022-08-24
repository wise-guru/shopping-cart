import Shades from "../Assets/products/shades.webp";
import Boots from "../Assets/products/boots.jpg";
import Stopper from "../Assets/products/stopper.webp";
import Umbrella from "../Assets/products/shoeumbrellas.png";
import Rock from "../Assets/products/rock.png";
import WateringCan from "../Assets/products/wateringCan.jpg";
import Baguette from "../Assets/products/baguette.webp";
import SleepingBag from "../Assets/products/sleepingBag.jpg";
import Airstick from "../Assets/products/airstick.webp";
import Products from "./Products";

function Shop() {
  const products = [
    { name: "SunShaders", image: Shades, id: 1 },
    { name: "Uncomfortable Rain Boots", image: Boots, id: 2 },
    { name: "Shopper Stopper", image: Stopper, id: 3 },
    { name: "Shoe Umbrella", image: Umbrella, id: 4 },
    { name: "USB pet rock", image: Rock, id: 5 },
    { name: "Watering Can ", image: WateringCan, id: 6 },
    { name: "The Baguette Pack", image: Baguette, id: 7 },
    { name: "Walking Sleeping Bag", image: SleepingBag, id: 8 },
    { name: "Airstick", image: Airstick, id: 9 },
  ];

  return (
    <main>
      <h1>Products</h1>
      <div className="productsContainer">
        {products.map((product) => {
          return (
            <Products
              key={product.id}
              image={product.image}
              name={product.name}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Shop;
