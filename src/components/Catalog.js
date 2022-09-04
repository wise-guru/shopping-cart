import Shades from "../Assets/products/shades.webp";
import Boots from "../Assets/products/boots.jpg";
import Stopper from "../Assets/products/stopper.webp";
import Umbrella from "../Assets/products/shoeumbrellas.png";
import Rock from "../Assets/products/rock.jpeg";
import WateringCan from "../Assets/products/wateringCan.jpg";
import Baguette from "../Assets/products/baguette.webp";
import SleepingBag from "../Assets/products/sleepingBag.jpg";
import Airstick from "../Assets/products/airstick.webp";

const Catalog = [
  {
    name: "SunShaders",
    image: Shades,
    id: 0,
    route: "/shopping-cart/shop/sun-shaders",
    price: 12.99,
    inCart: 0,
  },
  {
    name: "Uncomfortable Rain Boots",
    image: Boots,
    id: 1,
    route: "/shopping-cart/shop/uncomfortable-rain-boots",
    price: 18.99,
    inCart: 0,
  },
  {
    name: "Shopper Stopper",
    image: Stopper,
    id: 2,
    route: "/shopping-cart/shop/shopper-stopper",
    price: 9.99,
    inCart: 0,
  },
  {
    name: "Shoe Umbrella",
    image: Umbrella,
    id: 3,
    route: "/shopping-cart/shop/shoe-umbrella",
    price: 21.99,
    inCart: 0,
  },
  {
    name: "Walking Sleeping Bag",
    image: SleepingBag,
    id: 4,
    route: "/shopping-cart/shop/walking-sleeping-bag",
    price: 24.99,
    inCart: 0,
  },

  {
    name: "The Baguette Pack",
    image: Baguette,
    id: 5,
    route: "/shopping-cart/shop/the-baguette-pack",
    price: 9.99,
    inCart: 0,
  },

  {
    name: "Watering Can ",
    image: WateringCan,
    id: 6,
    route: "/shopping-cart/shop/watering-can",
    price: 13.49,
    inCart: 0,
  },
  {
    name: "Airstick",
    image: Airstick,
    id: 7,
    route: "/shopping-cart/shop/airstick",
    price: 11.99,
    inCart: 0,
  },
  {
    name: "USB pet rock",
    image: Rock,
    id: 8,
    route: "/shopping-cart/shop/usb-pet-rock",
    price: 8.99,
    inCart: 0,
  },
];

export default Catalog;
