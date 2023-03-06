import { Schema, Document, Model, model } from 'mongoose';

import { IOpinion, opinionSchema } from "../models/opinion.model";

interface IPunto extends Document {
    name: string;
    description: string;
    coordX: number;
    coordY: number;
    direccion: string;
    opinion: IOpinion[];
}

interface IMapa extends Document {
    code: string;
    puntos: IPunto[];
}

const puntoSchema = new Schema<IPunto>({
    name: {
        type: String,
        required: true
    },
     description: {
        type: String,
        required: true
    },
    coordX: {
        type: Number,
        required: true
    },
    coordY: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    opinion: {
        type: [opinionSchema],
        required: true
    }
});

const mapaSchema = new Schema<IMapa>({
  code: {
    type: String,
    required: true
  },
  puntos: {
    type: [puntoSchema],
    required: true
  }
});

const MapaModel: Model<IMapa> = model<IMapa>('Mapa', mapaSchema);

export default MapaModel;