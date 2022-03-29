import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage ); //201: The request has been fulfilled and resulted in a new resource being created.
    } catch (error) {
        res.status(409).json({ message: error.message }); //409: The request could not be completed due to a conflict with the current state of the resource. 
    }
}