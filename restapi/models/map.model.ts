import { Schema, Document, Model, model } from 'mongoose';
import {IPoint, pointSchema} from './point.model';



interface IMapa extends Document {
    code: string;
    puntos: IPoint[];
}



const mapaSchema = new Schema<IMapa>({
  code: {
    type: String,
    required: true
  },
  puntos: {
    type: [pointSchema],
    required: true
  }
});

const MapaModel: Model<IMapa> = model<IMapa>('Mapa', mapaSchema);

export default MapaModel;