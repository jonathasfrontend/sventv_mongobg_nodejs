const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(

  {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
});

module.exports = mongoose.model('variedades', PostSchema);