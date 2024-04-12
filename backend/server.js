const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
mongoose.connect("mongodb+srv://admin-ironwol:IronWol2004@ironwol.znds0nw.mongodb.net/moye_moye",{useNewUrlParser:true});
app.use(cors());
app.use(express.json());
const PostSchema = new mongoose.Schema({
    name:String,
    city:String,
    category:String,
    content:String
});
const Post=mongoose.model("Post",PostSchema);
app.get("/getposts",async(req,res)=>{
    const p=await Post.find({});
    res.json(p);
});
app.post("/addnewpost",(req,res)=>{
    const newpost=new Post(req.body.post);
    newpost.save().then(res.send("Saved successsfully!!")).catch((err)=>{res.send(err)});
})
app.listen(5000,()=>{console.log("server started on port 5000");});