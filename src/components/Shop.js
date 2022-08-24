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
    { 
      name: "SunShaders", 
      image: Shades, id: 1, 
      route: "/shop/sun-shaders", 
      price: 12.99 },
    {
      name: "Uncomfortable Rain Boots",
      image: Boots,
      id: 2,
      route: "/shop/uncomfortable-rain-boots",
      price: 18.99,
    },
    {
      name: "Shopper Stopper",
      image: Stopper,
      id: 3,
      route: "/shop/shopper-stopper",
      price: 9.99,
    },
    {
      name: "Shoe Umbrella",
      image: Umbrella,
      id: 4,
      route: "/shop/shoe-umbrella",
      price: 21.99,
    },
    { name: "USB pet rock", image: Rock, id: 5, route: "/shop/usb-pret-rock", price:  },
    {
      name: "Watering Can ",
      image: WateringCan,
      id: 6,
      route: "/shop/watering-can",
      price: 13.49,
    },
    {
      name: "The Baguette Pack",
      image: Baguette,
      id: 7,
      route: "/shop/the-baguette-pack",
      price: 9.99,
    },
    {
      name: "Walking Sleeping Bag",
      image: SleepingBag,
      id: 8,
      route: "/shop/walking-sleeping-bag",
      price: 24.99,
    },
    { 
      name: "Airstick", 
      image: Airstick, id: 9, 
      route: "/shop/airstick", 
      price: 11.99 
    },
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
