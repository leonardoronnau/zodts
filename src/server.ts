import express from 'express'
import z from 'zod'


const server = express()


server.use(express.json())
server.use(express.urlencoded({extended : true}))
server.get('/ping', (req, res) => {
    res.json({pong : true})
})


server.post('/user', (req, res) => {
 const userSchema = z.object({
    name: z.string(),
    age: z.number().
 })
})




server.listen(3000, ()=> {

})