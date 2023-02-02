import { model, Document, Schema } from "mongoose";

export interface Cars extends Document {
  // _id:String;
  city: string;
  name: string;
  brand: string;
  model: string;
  year: string;
  km: string;
  price: number;

  image: string;
  created_at: Date;
  updated_at: Date;
}

const schema = new Schema<Cars>({
  city: {
    type: String,
  },
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  year: {
    type: String,
  },
  km: {
    type: String,
  },

  price: {
    type: Number,
  },

  image: {
    type: String,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});

export const CarsSchema = model<Cars>("Cars", schema);
