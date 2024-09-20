import User from "../Models/user-model.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
export const Registeration = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // empty field check
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "All Fields are Required", success: false });
    }
    //length check
    if (name.length < 5) {
      return res.status(400).json({
        message: "Name must be greater than 5 letters",
        success: false,
      });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be greater than 8 letters" });
    }

    // userExist ?
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User Already Exist", success: false });
    }
    //hased Password
    const genSalt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, genSalt);
    // userCreated
    const userAdded = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    return res.status(200).json({
      message: "User Registered Successfully",
      success: true,
      userAdded,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Side Error in Registration form",
      success: false,
      error,
    });
  }
};

//Login Code
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check empty fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are Required", success: false });
    }
    // userExist ?
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "User Not Exist", success: false });
    }
    const matchPassword = await bcryptjs.compare(
      password,
      existingUser.password
    );
    //not matched password
    if (!matchPassword) {
      return res
        .status(400)
        .json({ message: "Password not Matched", success: false });
    }
    //jwt authentication
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    //matched Password
    return res.status(200).json({
      message: "Login Successfully",
      success: true,

      user: {
        name: existingUser.name,
        email: existingUser.email,
        gender: existingUser.gender,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Side Error in Login form",
      success: false,
      error,
    });
  }
};
