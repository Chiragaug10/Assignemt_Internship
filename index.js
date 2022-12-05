const express=require('express');
const dbconnect=require('./monodb');
async function insert()
{
    const db=await dbconnect();
    const result=db.insertOne({name:'Chirag Singh 3',files:'Sample',tagline:'Samele2',schedule:'Sample 3',description:'Sample 4',moderator:'Sample 5',category:'Sample 6',sub_category:'Sample 7',ringor_rank:'Sample 8'});
    if((await result).acknowledged)
    {
        console.log("Data Entered Successfully");
    }

}
const app=express();
app.get('/api/v3/app',(req,resp)=>
{
    console.log("Hello world");

})
app.get('/api/v3/app',(req,resp)=>
{
    console.log(resp.body);
})
app.post('/api/v3/app',(req,resp)=>
{
    insert();
})
app.put('/api/v3/app',(req,resp)=>
{
    insert();
})
app.delete('/api/v3/app', (req, res) => {
    const found = todos.some(todo => todo.id === req.params.id);

    if (!found) {
      res.status(400).json({ msg: `No meber whit id of ${req.params.id}` });
    } else {
      todos.filter(todo => todo.id !== req.params.id);
      res.json(todos);
    }
  });