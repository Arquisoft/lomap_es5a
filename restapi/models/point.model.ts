import { Schema, Document, Model, model } from 'mongoose';
import { IOpinion, opinionSchema } from "./opinion.model";


interface IPoint extends Document {
    webId: string; // propietario que lo sube
    idPoint: string;
    name: string;
    description: string;
    coords: {
        lat: number;
        lng: number;
    }
    direction: string;
    opinion?: IOpinion[];
    likes?: string[]; // lista de likes (con webIds)
}

const pointSchema = new Schema<IPoint>({
    webId: {
        type : String,
        required: true
    },
    idPoint: {
        type : String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coords: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    }
    ,
    direction: {
        type: String,
        required: true
    },
    opinion: {
        type: [opinionSchema],
        required: false
    },
    likes: {
        type: [String],
        required: false
    }
});

const PointModel: Model<IPoint> = model<IPoint>('Point', pointSchema);

export { PointModel, IPoint, pointSchema };