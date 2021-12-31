import  Mongoose  from "mongoose";

const newsShema= new Mongoose.Schema({
    title:{
      type:String,
      require:true,
    },
    author:{
        type:String,
      require:true,

    },
    description:{
        type:String,
        require:true,

    },
    url:{
        type:String,
        require:true,

    },
    timestamp:{
        type:String,
        require:true,

    },
    link:{
        type:String,
        require:true,

    },
    publisher:{
        type:String,
        require:true,

    }


});
const news = Mongoose.model('news',newsShema);

 export default news;