const express=require('express');
const cors=require('cors');

const app=express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/',(req,res)=>
{
    res.send('King, Your backend is working');
})


const calculateRoute=require('./routes/calculateRoutes');
app.use('/',calculateRoute)

app.listen(3000,()=>{
    console.log('server is listening on port 3000');
})