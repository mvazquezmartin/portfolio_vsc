import multer from 'multer';
import path from 'path';
import HTTP_STATUS_CODES from '../constants/htpp-status-code.constants.js';
import __dirname from '../utils/dirname.util.js';

const destination = path.join(__dirname, '/public/uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.fieldname}`;
    cb(null, fileName);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'), false);
    }
  },
});

upload.any = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
      status: 'error',
      message: 'Error uploading file',
      details: err.message,
    });
  } else if (err) {
    return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
      status: 'error',
      message: err.message,
    });
  }
  next();
};

export default upload;
