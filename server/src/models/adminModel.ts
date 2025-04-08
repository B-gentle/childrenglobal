import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Hashing passwords before saving (optional if you're using authentication libraries)
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Middleware to enforce the three-admin limit
adminSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const adminCount = await Admin.countDocuments();
      if (adminCount >= 3) {
        const error = new Error(
          "Admin limit reached. Cannot create more than three admins."
        );
        return next(error);
      }
    } catch (error) {
      return next(error instanceof Error ? error : new Error(String(error)));
    }
  }
  next();
});

// Add a method for verifying passwords (if needed for login)
adminSchema.methods.matchPassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
