const mongoose = require('mongoose');
const validator=require('validator')

mongoose.connect(process.env.Mongodb_URL)
  .then(() => console.log('Connected!'));




// const task1=new Task({description:'Task 1',completed:true})

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("Error",error)
// })