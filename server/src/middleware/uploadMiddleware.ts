import multer from "multer";
import path from "path";

// Configure storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filenameWithoutExt = path.parse(file.originalname).name;
    cb(
      null,
      file.fieldname + "-" + filenameWithoutExt + uniqueSuffix + path.extname(file.originalname)
    );
    // Example: 'img-1678886400000-123456789.jpg'
  },
});

// Filter for image files (optional)
const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(null, false); // Reject the file
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 25 }, // Limit file size to 25MB (optional)
});

export default upload;
