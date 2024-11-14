const mongoose =require("mongoose")

const { Schema } = mongoose;

const postSchema = new Schema({ 
  titleAR: String,
  nameAR:String,
  phone:String,
  type: String,
  DescriptionAR: String,
  date: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false }, 
  Price: Number,
  Price2: Number,
  LoactionAR: String, 
  image: String,
  stars:Number,
});

const Truck = mongoose.model('Truck', postSchema);
module.exports = Truck; 