//req -requset coming from the frontend
//res -response send to frontend from backend
//npm node packger manager

exports.create =(req,res) => {
   console.log(req.body);
    res.json({user:req.body})
}