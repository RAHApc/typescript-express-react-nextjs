import * as mongoose from 'mongoose';

// const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;

mongoose.connection.on('open', () => {
    console.log('mongo connection is open ...')
})
mongoose.connection.on('error', (error) => {
    console.log('failed to connect ', error.message)
})

const startMongoose = () => {
    mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`)
}

export default startMongoose
