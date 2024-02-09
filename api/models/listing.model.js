import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        originalUrl:{
            type: String,
            required: true
        },
        shortUrl:{
            type: String,
            required: true
        },
        userRef: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);
const Listing = mongoose.model('Listing', listingSchema);

export default Listing;