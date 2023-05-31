import imgproduct1 from "./img/products/CS_1600x.png";
import imgproduct2 from "./img/products/Oveja-negra-Rva-cabernet-franc-carmenere_b0ce77b1-0a06-436c-80f5-1b61deee7813_1600x.png";
import imgproduct3 from "./img/products/Toro-de-Piedra-Gran-Reserva-Cabernet-Sauvignon_1600x.png";
import imgproduct4 from "./img/products/LHTARAPACA_1600x.png";

const products = [
  {
    id: "0",
    name: "Vino Carmenere",
    stock: 12,
    price: 7990,
    category: "tintos",
    img: imgproduct1,
  },
  {
    id: "1",
    name: "Vino Cabernet",
    stock: 21,
    price: 4350,
    category: "tintos",
    img: imgproduct2,
  },
  {
    id: "2",
    name: "Vino Merlot ",
    stock: 14,
    price: 5790,
    category: "tintos",
    img: imgproduct3,
  },
  {
    id: "3",
    name: "Vino Blanco",
    stock: 16,
    price: 4990,
    category: "blancos",
    img: imgproduct4,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === productId));
    }, 500);
  });
};

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === categoryId));
    }, 500);
  });
};
