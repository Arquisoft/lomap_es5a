import { Schema, Document, Model, model } from 'mongoose';

interface IPersona extends Document {
    id: string;
    role: string;
    verified: boolean;
}

interface IGrupo extends Document {
    id: string;
    personas: IPersona[];
}

const personaSchema = new Schema<IPersona>({
    id: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    }
});

const grupoSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    personas: {
        type: [personaSchema],
        required: true
    }
});

const GrupoModel: Model<IGrupo> = model<IGrupo>('Grupo', grupoSchema);

export default GrupoModel;