import asyncHandler from "../middleware/asyncHandler";
import Admin from "../models/adminModel";
import { generateToken } from "../utils/generateAuthToken";

// login admin
export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter email and password");
  }

  const admin = await Admin.findOne({ email });
  if (admin && (await (admin as any).matchPassword(password))) {
    const token = generateToken(admin._id.toString());
    res.status(200).json({
      _id: admin._id,
      fullname: admin.fullname,
      email: admin.email,
      token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid login details");
  }
});

// create admin
export const createAdmin = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400);
    throw new Error("Please enter a valid email address");
  }

  const emailExist = await Admin.findOne({ email });
  if (emailExist) {
    res.status(400);
    throw new Error("Email already exists");
  }

  const admin = new Admin({
    fullname,
    email,
    password,
  });

  const createdAdmin = await admin.save();
  res.status(201).json(createdAdmin);
});

// delete admin
export const deleteAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);

  if (admin) {
    await admin.deleteOne();
    res.status(200).json({ message: "Admin deleted successfully" });
  } else {
    res.status(404).json({ message: "Admin not found" });
  }
});

// get all admins
export const getAllAdmins = asyncHandler(async (req, res) => {
  const admins = await Admin.find({}).select("-password");
  if (admins) {
    res.status(200).json(admins);
  } else {
    res.status(404);
    throw new Error("No admins found");
  }
});

// get admin by id
export const getAdminById = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id).select("-password");

  if (admin) {
    res.status(200).json(admin);
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});

// update admin
export const updateAdmin = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;
  const admin = await Admin.findById(req.params.id).select("-password");
  if (admin) {
    admin.fullname = fullname || admin.fullname;
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        res.status(400);
        throw new Error("Please enter a valid email address");
      }
      const emailExist = await Admin.findOne({ email });
      if (emailExist && emailExist._id.toString() !== admin._id.toString()) {
        res.status(400);
        throw new Error("Email already exists");
      }
      admin.email = email;
    }
    if (password) {
      admin.password = password;
    }
    const updatedAdmin = await admin.save();
    res.status(200).json(updatedAdmin);
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});
