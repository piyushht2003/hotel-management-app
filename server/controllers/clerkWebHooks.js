import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res)=>{
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        //Getting headers
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signatue": req.headers["svix-signature"],
        };

        //Verifying headers
        await whook.verify(JSON.stringify(req.body), headers)

        //Getting Data from request body
        const  {data, type} = req.body

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_addresses,
            username: data.firstname + " " + data.lastname,
            image: data.image_url
        }

        //Switch cases
        switch (type) {
            case "user.created":{
                await User.create(userData);
                break;
            }
            case "user.updated":{
                await User.findByIdAndUpdate(userData);
                break;
            }
            case "user.deleted":{
                await User.findByIdAndDelete(userData);
                break;
            }
            default:
                break;
        }

        res.json({success: true, message: "Webhook recieved"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

export default clerkWebhooks;