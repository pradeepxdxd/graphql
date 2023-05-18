import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    title : {
        type : String,
        required : true
    }
})

export default mongoose.model('Quote', quoteSchema);