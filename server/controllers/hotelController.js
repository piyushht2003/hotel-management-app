import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel = async (req, res)=>{
    try {
        const {name, address, contact, city} = req.body;
        const owner = req.user._id;

        //Check if user is already registered 

        const hotel = await Hotel.findOne({owner});
        if(hotel){
            return res.json({success: false, messsage: "Hotel Already Registered"})
        }else{

        }

        await Hotel.create({name, address, contact, city, owner});

        await User.findByIdAndUpdate(owner, {role: "hotelOwner"});

        res.json({success: true, messsage: "Hotel Registered Successfully"})

    } catch (error) {
        res.json({success: false, messsage: error.messsage})
    }
}