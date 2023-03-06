import { Schema, Document, Model, model } from 'mongoose';

interface IOpinion extends Document {
    id: string;
    description: string;
    note: number;
}

const opinionSchema = new Schema<IOpinion>({
    id: {
        type: String,
        required: true
    },
     description: {
        type: String,
        required: true
    },
    note: {
        type: Number,
        required: true
    }
});

const OpinionModel: Model<IOpinion> = model<IOpinion>('Opinion', opinionSchema);

export default OpinionModel;