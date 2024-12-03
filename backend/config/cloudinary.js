// cloudinaryConfig.js
const { v2: cloudinary } = require("cloudinary");

const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
};

module.exports = {
  connectCloudinary,
  cloudinary, // Xuất `cloudinary` để sử dụng trong các module khác
};
