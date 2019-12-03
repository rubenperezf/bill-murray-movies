const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 2400
const app = express()

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://hola:hola@cluster0-im5lw.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const BillMurrayMoviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
})
const BillMurrayMoviesModel = mongoose.model("BillMurrayMovie", BillMurrayMoviesSchema)

const getBillMurrayMovies = async (request, response) => {
    try {
        console.log("Get Bill Murray Movies")
        const BillMurrayMoviesInstance = await BillMurrayMoviesModel.find({})
        console.log(BillMurrayMoviesInstance)
        response.send(BillMurrayMoviesInstance)
    }
    catch (error) {
        response.status(500).send(error)
    }


}


const postBillMurrayMovie = async (request, response) => {
    try {
        console.log("Post Bill Murray Movie")
        var BillMurrayMoviesInstance = new BillMurrayMoviesModel(request.body)
        console.log(BillMurrayMoviesInstance)
        const created = await BillMurrayMoviesModel.create( BillMurrayMoviesInstance)
        console.log(created)
        response.send(created)

        console.log('created')
    }
    catch (error) {
        response.status(500).send(error)
    }
}

const deleteBillMurrayMovie = async (request, response) => {
    try{
        console.log('Delete Bill Murray Movie')
        var BillMurrayMoviesInstance = await BillMurrayMoviesModel.deleteOne({"_id":request.params.id})
        console.log(BillMurrayMoviesInstance)
        response.send(BillMurrayMoviesInstance)

    }
    catch(error){
        response.status(500).send(error)
    }
}
const updateBillMurrayMovie = async (request, response) => {
    try{
        console.log('Update Bill Murray Movie')
        var BillMurrayMoviesInstance = new BillMurrayMoviesModel(request.body)
        console.log(BillMurrayMoviesInstance)
        const created = await BillMurrayMoviesModel.findOneAndUpdate({"_id":request.params.id}, request.body)
        console.log(created)
        response.send(created)
    }
    catch(error){
        response.status(500).send(error)
    }
}


app.route("/BillMurrayMovies/:id")
    .delete(deleteBillMurrayMovie)
    .put(updateBillMurrayMovie)
app.route("/BillMurrayMovies")
    .post(postBillMurrayMovie)
    .get(getBillMurrayMovies)

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})