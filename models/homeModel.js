import mongoose, { Schema } from 'mongoose';

// Define home schema
var homeSchema = new Schema({
  ph: Number,
  vol: Number,
  temp: Number,
  time: Date,
});

// Export Mongoose model
export default mongoose.model('home', homeSchema);