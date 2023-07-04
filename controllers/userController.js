import usermodel from '../models/userModel.js'

export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await usermodel.findOne({ email, password });
      if (!user) {
        return res.status(404).send("User Not Found");
      }
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
  };


export const registerController = async (req, res) => {
    try {
        const newUser = new usermodel(req.body)
        await newUser.save()
        res.status(201).json({
            success: true,
            newUser
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }
}