import laptop from "../assets/images/products/laptop.png";
import mobile from "../assets/images/products/mobile.png";
import headphone from "../assets/images/products/headphone.png";
import watch from "../assets/images/products/watch.png";
import camera from "../assets/images/products/camera.png";
import keyboard from "../assets/images/products/keyboard.png";
import mouse from "../assets/images/products/mouse.png";
import speaker from "../assets/images/products/speaker.png";

const products = [
  {
    id: 1,
    name: "ASUS ROG Gaming Laptop",
    category: "Laptop",
    image: laptop,
    price: 89999,
    oldPrice: 99999,
    rating: 5,
    description:
      "Powerful gaming laptop with Intel Core i7, RTX graphics, 16GB RAM and 1TB SSD."
  },
  {
    id: 2,
    name: "I Phone 17 Pro Max",
    category: "Mobile",
    image: mobile,
    price: 74999,
    oldPrice: 79999,
    rating: 5,
    description:
      "Flagship smartphone with AMOLED display and powerful camera."
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    image: headphone,
    price: 24999,
    oldPrice: 28999,
    rating: 5,
    description:
      "Premium wireless noise-cancelling headphones."
  },
  {
    id: 4,
    name: "Apple Watch",
    category: "Watch",
    image: watch,
    price: 39999,
    oldPrice: 44999,
    rating: 4,
    description:
      "Smart fitness watch with health monitoring."
  },
  {
    id: 5,
    name: "Canon EOS Camera",
    category: "Camera",
    image: camera,
    price: 59999,
    oldPrice: 67999,
    rating: 5,
    description:
      "Professional DSLR camera for photography."
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    category: "Accessories",
    image: keyboard,
    price: 3999,
    oldPrice: 4999,
    rating: 4,
    description:
      "RGB mechanical gaming keyboard."
  },
  {
    id: 7,
    name: "Gaming Mouse",
    category: "Accessories",
    image: mouse,
    price: 1999,
    oldPrice: 2499,
    rating: 4,
    description:
      "High precision RGB gaming mouse."
  },
  {
    id: 8,
    name: "JBL Speaker",
    category: "Speaker",
    image: speaker,
    price: 5999,
    oldPrice: 6999,
    rating: 5,
    description:
      "Portable Bluetooth speaker with deep bass."
  }
];

export default products;