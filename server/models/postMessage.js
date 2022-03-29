import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

//create a model from the schema. Make sure the name of the model is exactly the same as the parameter
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;