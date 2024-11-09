const express = require('express');
const credentials = require('./data')

const app=express();
app.use(express.json());

const port=3000;

app.get("/fetchdata",(req,resp)=>{
  resp.send({success:true,data:credentials});
  console.log(credentials);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
