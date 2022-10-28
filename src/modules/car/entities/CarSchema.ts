import { model, Document, Schema } from 'mongoose';


export interface Cars extends Document {
  // _id:String;
  name: string;
  brand: string;
  model: string;
  image: string;
  created_at: Date;
  updated_at: Date;
}

const schema = new Schema<Cars>({
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  image: {
    type: String,
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  updated_at: {
    type: Date,
    default: new Date()
  }
});


export const CarsSchema = model<Cars>('Cars', schema);