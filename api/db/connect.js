const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://admin:PASSWORD@devjobs-cluster.elu5wln.mongodb.net/devjobs?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose
    .connect(connectionString)
    .then(()=>{console.log('CONNECTED TO THE DB...')})
    .catch((err) => console.log(err))
} 

module.exports = connectDB
