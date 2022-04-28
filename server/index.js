//add "type": "module" in json to enable import  
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()


//bodyParser: properly send out requrest
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())

app.use('/posts', postRoutes) // route to postRoutes when url is localhost: PORT/posts/ ...

const CONNECTION_URL = "mongodb+srv://irena1009:demo123@cluster0.9zado.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5001

mongoose.connect(CONNECTION_URL) 
    //{ useNewUrlParser: true, useUnifiedTopology: true }) -> deprecated
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error => console.log(error.message)))

//mongoose.set('useFindAndModify', false) -> deprecated`