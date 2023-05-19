const mongoose = require('mongoose');


const url='mongodb://localhost:27017/questions'
// const url='mongodb+srv://GUNA_SEKHAR:UTRW2Bm8p3ko1OlZ@cluster0.5lszsig.mongodb.net/?retryWrites=true&w=majority/questions'
// const url='mongodb+srv://GUNA_SEKHAR:mTm9RCkWGhK8mZcY@demo.1hpmgrg.mongodb.net/questions'


const connectTomongo=()=>{
    const connectionParams={
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
    mongoose.set('strictQuery', true);
    mongoose.connect(url,connectionParams)
        .then( () => {
            console.log('Connected to the database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. n${err}`);
        })
}

module.exports=connectTomongo;
