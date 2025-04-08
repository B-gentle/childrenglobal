import asyncHandler from "../middleware/asyncHandler";
import ContactInfo from "../models/contactModel";

// create contact info
export const createContactInfo = asyncHandler(async (req, res) => {
  const { email, phoneNumber } = req.body;

  if (!email || !phoneNumber) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{1,}([-.\s]?\d{1,}){1,}$/;

  if (!emailRegex.test(email)) {
    res.status(400);
    throw new Error("Invalid email address");
  }
  if (!phoneRegex.test(phoneNumber)) {
    res.status(400);
    throw new Error("Invalid phone number");
  }

  const existingContact = await ContactInfo.findOne({});

  if (existingContact) {
    res.status(400);
    throw new Error(
      "Contact information already exists. Use the update endpoint."
    );
  }

  const contactInfo = await ContactInfo.create({
    email,
    phoneNumber,
  });

  res.status(201).json(contactInfo);
});

// update contact info
export const updateContactInfo = asyncHandler(async (req, res) => {
  const { phoneNumber, email } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{1,}([-.\s]?\d{1,}){1,}$/;

  if (!emailRegex.test(email)) {
    res.status(400);
    throw new Error("Invalid email address");
  }
  if (!phoneRegex.test(phoneNumber)) {
    res.status(400);
    throw new Error("Invalid phone number");
  }

  const contactInfo = await ContactInfo.findOne({});
  if (contactInfo) {
    contactInfo.phoneNumber = phoneNumber || contactInfo.phoneNumber;
    contactInfo.email = email || contactInfo.email;
    const updatedContactInfo = await contactInfo.save();
    if (updatedContactInfo) {
      res.status(200).json({ message: "Contact Info updated successfully" });
    } else {
      res.status(500);
      throw new Error("Internal Server error, please try again!");
    }
  } else {
    res.status(400);
    throw new Error("Contact Info not found. Please use the create endpoint");
  }
});
