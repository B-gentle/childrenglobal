import asyncHandler from "../middleware/asyncHandler";
import Gallery from "../models/galleryModel";

// @desc    Upload a new image to the gallery
// @route   POST /api/gallery/upload
// @access  Private (Admin only)

export const uploadGalleryImage = asyncHandler(async (req, res) => {
  const { text } = req.body;

  // Check if an image file is uploaded
  if (!req.file) {
    res.status(400);
    throw new Error("Please upload an image");
  }

  // Save the image and text to the database
  const galleryItem = new Gallery({
    img: `/uploads/${req.file.filename}`, // Path to the uploaded image
    text,
  });

  const createdGalleryItem = await galleryItem.save();

  res.status(201).json({
    message: "Image uploaded successfully",
    galleryItem: createdGalleryItem,
  });
});

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
export const getGalleryItems = asyncHandler(async (req, res) => {
  const galleryItems = await Gallery.find({});
  if (galleryItems) {
    res.status(200).json(galleryItems);
  } else {
    res.status(400);
    throw new Error("Unable to fetch gallery Items");
  }
});
