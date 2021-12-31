import  Mongoose  from "mongoose";

const connection = async() => {
    try{
    const URL =`mongodb+srv://Puneet:9541246292@clone-inshort.9mfhz.mongodb.net/clone-inshort?retryWrites=true&w=majority`
    
    await Mongoose.connect(URL, {useNewUrlParser: true})
    console.log('database connected');
    }catch(error){
        console.log('error while connection with data base',error);
    }
}

export default connection;