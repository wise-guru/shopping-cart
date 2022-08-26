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
    route: "/shop/sun-shaders",
    price: 12.99,
  },
  {
    name: "Uncomfortable Rain Boots",
    image: Boots,
    id: 1,
    route: "/shop/uncomfortable-rain-boots",
    price: 18.99,
  },
  {
    name: "Shopper Stopper",
    image: Stopper,
    id: 2,
    route: "/shop/shopper-stopper",
    price: 9.99,
  },
  {
    name: "Shoe Umbrella",
    image: Umbrella,
    id: 3,
    route: "/shop/shoe-umbrella",
    price: 21.99,
  },
  {
    name: "Walking Sleeping Bag",
    image: SleepingBag,
    id: 4,
    route: "/shop/walking-sleeping-bag",
    price: 24.99,
  },

  {
    name: "The Baguette Pack",
    image: Baguette,
    id: 5,
    route: "/shop/the-baguette-pack",
    price: 9.99,
  },

  {
    name: "Watering Can ",
    image: WateringCan,
    id: 6,
    route: "/shop/watering-can",
    price: 13.49,
  },
  {
    name: "Airstick",
    image: Airstick,
    id: 7,
    route: "/shop/airstick",
    price: 11.99,
  },
  {
    name: "USB pet rock",
    image: Rock,
    id: 8,
    route: "/shop/usb-pret-rock",
    price: 8.99,
  },
];

export default Catalog;
