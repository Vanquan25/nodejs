import User from "../models/user";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
       const existUser = await User.findOne({email}).exec();
       if(existUser){
            res.json({
                message: "Email da ton tai"
            })
       };
       const user = await new User({email, name, password}).save();
       res.json({
           user: {
               _id: user._id,
               name: user.name,
               email: user.email,
           }
       })
    } catch (error) {
        
    }
}

export const signin = async (req, res) => {
    const { email, password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message: "email không tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message: "Sai mật khẩu"
            })
        }

        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        
    }
}