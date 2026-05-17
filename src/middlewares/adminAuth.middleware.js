import ApiError from "../utils/ApiError.js";

const adminAuth = (req, res, next) => {
  try {
    console.log("SESSION IN MIDDLEWARE:", req.session);
    if (!req.session.isAdmin) {
      throw new ApiError(401, "Unauthorized access");
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default adminAuth;
