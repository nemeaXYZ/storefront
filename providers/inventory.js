import uuid from "uuid/v4";

let inventory = [
  {
    categories: ["new arrivals"],
    name: "Timber Gray Sofa",
    price: "1000",
    image: "../images/products/couch1.png",
    description:
      "Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.",
    brand: "Jason Bourne",
    currentInventory: 4,
  },
];

inventory.map((i) => {
  i.id = uuid();
  return i;
});

export default inventory;
