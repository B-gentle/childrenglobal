import mongoose, { Schema } from 'mongoose';


const contactSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: 'Invalid email address',
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (v: string) => /^\+?\d{1,}([-.\s]?\d{1,}){1,}$/.test(v),
        message: 'Invalid phone number',
      },
    },
  },
  {
    timestamps: true,
  }
);

const ContactInfo = mongoose.model('ContactInfo', contactSchema);

export default ContactInfo;