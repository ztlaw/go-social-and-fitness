const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./config/.env" });

cloudinary.config({
  // cloud_name: process.env.CLOUD_NAME,
  // api_key: process.env.API_KEY,
  // api_secret: process.env.API_SECRET
  cloud_name: 'to-you-web-development',
  api_key: '285412165377551',
  api_secret: '04bm-g_GAYLEZJpawtpVkZu7XNs'
});

module.exports = cloudinary;
