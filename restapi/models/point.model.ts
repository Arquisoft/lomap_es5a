import { Schema, Document, Model, model } from 'mongoose';
import { IOpinion, opinionSchema } from "./opinion.model";

interface IPoint extends Document {
    webId: string;
    name: string;
    description: string;
    lat: number;
    lng: number;
    direction: string;
    opinion: IOpinion[];
}

const pointSchema = new Schema<IPoint>({
    webId: {
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
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    direction: {
        type: String,
        required: true
    },
    opinion: {
        type: [opinionSchema],
        required: true
    }
});


const PointModel: Model<IPoint> = model<IPoint>('Point', pointSchema);

export default PointModel;
export { IPoint, pointSchema };