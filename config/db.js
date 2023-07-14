const mongoose = require('mongoose'); 

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDb Connceted: ${conn.connection.host} `)
    } catch (err) {
        console.error(err)
        process.exit()

    }
};

module.exports = connectDB; 