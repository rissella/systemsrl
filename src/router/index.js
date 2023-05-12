import {Router} from "express"
export const Route = Router();


//endpoint
Route.get('/inicio',function(req, res){
    res.json({
    mensaje:"hola curso backend",
    error:false
    })
});

