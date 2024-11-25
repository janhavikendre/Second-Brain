import { Express,Request,Response } from "express";
import { Router } from "express";
 import userMiddleware from "../middlewares/usermiddleware";
 import { Brain } from "../models/db";
import { User } from "../models/db";
const BrainRouter = Router();

interface CustomRequest extends Request {
    userId ?: string;
}

BrainRouter.post("/create", userMiddleware, async (req: CustomRequest, res: Response) => {
    try {
        const userId = req.userId ?? "";
        const { contentType, contentLink, title, description, tags, manualContent} = req.body;
        const brain = await Brain.create({
            user: userId,
            contentType,
            contentLink,
            title,
            description,
            tags,
            manualContent
        });
            
        if(brain) { 
            res.status(201).json({
                message : "Brain created",
                brain,
                _id : brain._id
            })
        }
    }
     catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating brain", error });

        
    }
});

BrainRouter.put("/update/:id", userMiddleware, async (req: CustomRequest, res: Response) => {
    try {
        const userId = req.userId ?? "";
        const { id } = req.params;
        const { contentType, contentLink, title, description, tags, manualContent} = req.body;
        const brain = await Brain.findOneAndUpdate({
            _id: id,
            user: userId
        }, {
            contentType,
            contentLink,
            title,
            description,
            tags,
            manualContent,
         }, {
                new: true
            }
        )
        if (brain) {
            res.status(200).json({
                message: "Brain updated",
                brain, 
                _id: (brain as any)._id
            })
        } else {
            res.status(400).json({
                message: "Brain not found"
            })
        }
    }
    catch (error) {
        console.error(error)
    }
    

})

BrainRouter.delete("/delete/:id", userMiddleware, async (req: CustomRequest, res: Response) => {
    try {
        const userId = req.userId ?? "";
        const { id } = req.params;
        const brain = await Brain.findOneAndDelete({
            _id: id,
            user: userId
        });
        if (brain) {
            res.status(200).json({
                message: "Brain deleted",
                brain,
                _id: (brain as any)._id
            })
        }
    }
    catch (error) {
        console.error(error)
    }
})

BrainRouter.get('/user',userMiddleware,async (req: CustomRequest , res : Response) => {    
    try{
        const userId = req.userId ?? "" ;
        const Allbrain = await Brain.find({user : userId});
        res.status(200).json(Allbrain);
    }catch(error){
            console.error(error)
    }
})

export default BrainRouter;