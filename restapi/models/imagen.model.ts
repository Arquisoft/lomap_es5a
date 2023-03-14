import { Schema, Document, Model, model } from 'mongoose';

interface IImagen extends Document {
    url: string;
}

const imagenSchema = new Schema<IImagen>({
    url: {
        type: String,
        required: true
    }
});

const ImagenModel: Model<IImagen> = model<IImagen>('Imagen', imagenSchema);

export default ImagenModel;