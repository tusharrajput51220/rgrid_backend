import ApiError from "../utils/ApiError.js";

const adminAuth = (req, res, next) => {
  try {
    if (!req.session.isAdmin) {
      throw new ApiError(401, "Unauthorized access");
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default adminAuth;
