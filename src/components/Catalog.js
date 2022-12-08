import Shades from "../Assets/products/sunShaders/shades.webp";
import Shades2 from "../Assets/products/sunShaders/sunShaders-two.jpg";
import Shades3 from "../Assets/products/sunShaders/sunShaders-three.jpg";

import Boots from "../Assets/products/rainBoots/boots.jpg";
import Boots2 from "../Assets/products/rainBoots/boots-two.jpeg";

import Stopper from "../Assets/products/shopperStopper/stopper.webp";
import Stopper2 from "../Assets/products/shopperStopper/stopper-two.jpg";
import Stopper3 from "../Assets/products/shopperStopper/stopper-three.jpg";

import Umbrella from "../Assets/products/shoeUmbrellas/shoeumbrellas.png";
import Umbrella2 from "../Assets/products/shoeUmbrellas/shoeumbrellas-two.png";
import Umbrella3 from "../Assets/products/shoeUmbrellas/shoeumbrellas-three.jpg";

import Rock from "../Assets/products/rock/rock.jpeg";
import Rock2 from "../Assets/products/rock/rock-two.jpeg";
import Rock3 from "../Assets/products/rock/rock-three.jpg";

import WateringCan from "../Assets/products/wateringCan/wateringCan.jpg";
import WateringCan2 from "../Assets/products/wateringCan/wateringCan-two.jpg";
import WateringCan3 from "../Assets/products/wateringCan/wateringCan-three.webp";

import Baguette from "../Assets/products/baguette/baguette.webp";
import Baguette2 from "../Assets/products/baguette/baguette-two.jpg";
import Baguette3 from "../Assets/products/baguette/baguette-three.jpg";

import SleepingBag from "../Assets/products/sleepingBag/sleepingBag.jpg";
import SleepingBag2 from "../Assets/products/sleepingBag/sleepingBag-two.jpg";
import SleepingBag3 from "../Assets/products/sleepingBag/sleepingBag-three.jpeg";

import Airstick from "../Assets/products/airstick/airstick.webp";
import Airstick2 from "../Assets/products/airstick/airstick-two.jpeg";
import Airstick3 from "../Assets/products/airstick/airstick-three.jpeg";

import PrivacyHood from "../Assets/products/hoodie/privacyHood.jpg";
import PrivacyHood2 from "../Assets/products/hoodie/hoodie-two.webp";
import PrivacyHood3 from "../Assets/products/hoodie/hoodie-three.jpg";

import NoodleFan from "../Assets/products/noodleFan/noodleFan.jpg";
import NoodleFan2 from "../Assets/products/noodleFan/noodleFan-two.png";
import NoodleFan3 from "../Assets/products/noodleFan/noodleFan-three.webp";

import Bed from "../Assets/products/bed/bed.jpg";
import Bed2 from "../Assets/products/bed/bed-two.jpg";

const Catalog = [
  {
    name: "SunShaders",
    images: [Shades, Shades2, Shades3],
    // secondimages:Shades2,
    // thirdimages: Shades3
    id: 0,
    route: "sun-shaders",
    price: 12.99,
    inCart: 0,
    description: `Are your usual sunglasses letting in too much light or not giving  you quite enough privacy? Are you looking to start a new fashion trend? Then SunShaders might be the product for you - stylish blinds for your sunglasses.

    Get more of your sunglasses with your own shades for your shades. Whether you need to block out more light, spy through the blinds, or block out haters - wear them up, down, or closed with your favourite pair of sunglasses.`,
  },
  {
    name: "Uncomfortable Rain Boots",
    images: [Boots, Boots2],
    id: 1,
    route: "uncomfortable-rain-boots",
    price: 18.99,
    inCart: 0,
    description: `Ever been unable to decide whether to wear rain boots or sandals? With the Uncomfortable Rain Boots, you can have both! You'll be equipped for rain AND shine.`,
  },
  {
    name: "Shopper Stopper",
    images: [Stopper, Stopper2, Stopper3],
    id: 2,
    route: "shopper-stopper",
    price: 9.99,
    inCart: 0,
    description: `Stop accidentally clicking the Instagram Shop tab. With recent layout changes, users around the world are clicking on tabs they have no desire to use. Our newest phone slider will ensure you never tap the Shop or Reels tab on @Instagram when looking for your notifications. The Instagram experience you know and love has finally returned.`,
  },
  {
    name: "Shoe Umbrella",
    images: [Umbrella, Umbrella2, Umbrella3],
    id: 3,
    route: "shoe-umbrella",
    price: 21.99,
    inCart: 0,
    description: `No matter how big the umbrella, do your feet still get wet uner a torrential downfall? These umbrella shoes are a unique solution to this ongoing problem.

    Now, you can wear suede heels in rainy weather too!
    `,
  },
  {
    name: "Walking Sleeping Bag",
    images: [SleepingBag, SleepingBag2, SleepingBag3],
    id: 4,
    route: "walking-sleeping-bag",
    price: 24.99,
    inCart: 0,
    description: `Whether you're gearing up for a weekend outdoors, on the road, or on the couch, you need the wearable sleeping bag! It keeps you warm and cozy and comes with features like cargo pockets, elastic hand enclosures, and removable boots.`,
  },

  {
    name: "The Baguette Pack",
    images: [Baguette, Baguette2, Baguette3],
    id: 5,
    route: "the-baguette-pack",
    price: 9.99,
    inCart: 0,
    description: `FINALLY a backpack specially designed for your delicious baguette. Hit your local bakery and pick up some steaming hot freshly baked bread knowing you will keep it safe, protected, and dry all the way home. Slide this French delicacy into our ergonomically designed pouch and cinch it up to be on your way in no time!`,
  },
  {
    name: "Eternally Single Bed",
    images: [Bed, Bed2],
    id: 6,
    route: "eternally-single-bed",
    price: 254.99,
    inCart: 0,
    description: `For those truly tiny bedrooms that have no extra space at all, this space-saving fetal position bed has a minuscule footprint. This bed is great! If you only sleep on your side and never, ever move.`,
  },
  {
    name: "Airstick",
    images: [Airstick, Airstick2, Airstick3],
    id: 7,
    route: "airstick",
    price: 11.99,
    inCart: 0,
    description: `Forever losing your Apple Airpods? Or simply worried that you might misplace them? Also a fiend for oriental food and wolfing down a good meal with some chopsticks? Then the Airsticks might be the perfect solution for you.

    The perfect accessory for your Apple AirPods. Enjoy your favourite sushi on the go and never leave your chopsticks behind.
    `,
  },
  {
    name: "USB Pet Rock",
    images: [Rock, Rock2, Rock3],
    id: 8,
    route: "usb-pet-rock",
    price: 8.99,
    inCart: 0,
    description: `Simply plug the USB cable into a free port and let the fun begin. The USB Pet Rock will instantly begin to work its magic. People will stop by and ask you what your USB Pet Rock does. Each time, you can make up a new story; for no matter what you say, it will be greater than the truth - because these USB Pet Rocks don't do a dang thing! Except make you smile. And confuse your friends and coworkers, which will make you smile even more.

    Here's why you need a USB Pet Rock now: They make a great gift for everyone we can think of. They don't need food or water. They don't chew on your stuff. They will make you instantly cool. They never talk back to you. They will forever love you in their own rocky way. They are the greenest USB products ever created, as they draw absolutely no electricity.
    `,
  },
  {
    name: "Privacy Hood",
    images: [PrivacyHood, PrivacyHood2, PrivacyHood3],
    id: 9,
    route: "privacy-hood",
    price: 19.99,
    inCart: 0,
    description: `Ever sat on a crowded airplane or bus with your laptop open, craving a little privacy as you typed an email or watched a terrible movie? This hoddie is the solution for exactly that dilemma, and it's a bit more, shall we say, enveloping than one of those privacy filters you slide over your screen.
    
    Designed for technology fans everywhere, the privacy hoodie provides you with a private environment for your computer, cell phone or even gaming console. Yeah this doesn't look conspicuous at all.`,
  },
  {
    name: "Noodle Fan",
    images: [NoodleFan, NoodleFan2, NoodleFan3],
    id: 10,
    route: "noodle-fan",
    price: 12.78,
    inCart: 0,
    description: `Picture this. You're ready to chow down on some Ramen noodles but ouch! The noodles are piping hot. Sigh. If only there was a way to eat them immediately. Introducing, the Noodle Fan!
    
    This product is perfect for when you don't want to burn your mouth, and you're too lazy to cool them off yourself. As an added bonus, if you are getting too hot while eating the delectable dish, just turn the fan upwards and enjoy a cool breeze! (Battery not included.)`,
  },
  {
    name: "Watering Can ",
    images: [WateringCan, WateringCan2, WateringCan3],
    id: 11,
    route: "watering-can",
    price: 13.49,
    inCart: 0,
    description: `This watering can is deliberately annoying and even useless in an effort to water itself. You may use it to annoy an imaginary miniature gardener, or place it in your office to make you remember the importance of good design.`,
  },
];

export default Catalog;
