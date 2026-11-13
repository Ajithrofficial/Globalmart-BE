// Usage: npm run seed   (fills the "products" collection from fakestoreapi.com)
require('dotenv').config();
const mongoose = require('mongoose');
const products = require('./Models/productModel');

(async () => {
  await mongoose.connect(process.env.DATABASE.trim());
  const data = await (await fetch('https://fakestoreapi.com/products')).json();
  await products.deleteMany({});
  await products.insertMany(data.map(({ id, title, price, description, category, image, rating }) =>
    ({ id, title, price, description, category, image, rating })));
  console.log(`Seeded ${data.length} products`);
  await mongoose.disconnect();
})().catch(e => { console.error(e); process.exit(1); });
