import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
    barcode: {
        type: String,
        unique: true,
        required: true
    },
    name_movie: String,
    date: String,
    price: Number,
    seat: String,
    status: Number
},
{
    versionKey: false,
    timestamps: true
});

export default model ('tickets', ticketSchema);