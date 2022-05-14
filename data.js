export const storeConfig = {
  name: "Store Name",
};
export default [
  {
    name: "泡泡弓箭",
    price: "",
    shipping: "",
    name_en: "Bobble Archery",
    categories: ["toy"],
    media: {
      images: ["./images/product/001/a.png", "./images/product/001/b.png"],
      videos: ["./videos/products/001/a.mp3"],
    },
    properties: [
      { color: "blue/pink" },
      { package: "34*31*7cm" },
      { weight: "1kg" },
      { includes: "60 ml bobble bottle" },
      { age: "7-14" },
    ],
    options: ["blue", "pink", "random"],
  },
  {
    name: "充电线",
    name_en: "Bobble Archery",
    price: "",
    shipping: "",
    categories: ["toy"],
    media: {
      images: ["./images/product/001/a.png", "./images/product/001/b.png"],
      videos: ["./videos/products/001/a.mp3"],
    },
    description: "尼龙编织线, pc 材质",
    properties: [
      { color: "blue/pink" },
      { length: "1m/2m" },
      { weight: "1kg" },
      { includes: "60 ml bobble bottle" },
    ],
    options: ["1m", "2m"],
  },
];
