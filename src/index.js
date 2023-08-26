const express = require('express')
require('./db/mongoose')


const app = express()
const port = process.env.PORT

const userRouter=require('./routes/user_router')
const taskRouter=require('./routes/task_router')

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const Task = require('./models/tasks')
const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5c2e505a3253e18a43e612e6')
//     // await task.populate('owner').exec()
//     // console.log(task.owner)

//     const user = await User.findById('64e98dcbc66e87290f7e42aa')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }

// main()

// const router=express.Router()

// router.get('/tasks',async(req,res)=>{
//     try{
//         const tasks= await Task.find({})
//         res.send(tasks)
//     }
//     catch(e){
//         res.status(500).send(e)
        
//     }
 
//  })

//  app.use(router)

// const multer=require('multer')
// const upload=multer({
//     dest:'profile_imgs'
// })

// app.post('/users/me/profile',upload.single('profile_img'),(req,res)=>{
//     res.send()
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})