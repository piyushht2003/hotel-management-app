import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res)=>{
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        //Getting headers
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        //Verifying headers
        await whook.verify(JSON.stringify(req.body), headers)

        //Getting Data from request body
        const  {data, type} = req.body

        

        //Switch cases
        switch (type) {
            case "user.created":{
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    username: data.first_name + " " + data.last_name,
                    image: data.image_url
                }
                await User.create(userData);
                break;
            }
            case "user.updated":{
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    username: data.first_name + " " + data.last_name,
                    image: data.image_url
                }
                await User.findByIdAndUpdate(data.id, userData);
                break;
            }
            case "user.deleted":{
                await User.findByIdAndDelete(data.id);
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