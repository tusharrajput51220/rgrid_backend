import * as adminService from "../services/admin.service.js";
import ApiResponse from "../utils/ApiResponse.js";

// POST /api/v1/admin/login
export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    await adminService.loginAdmin(username, password);

    req.session.isAdmin = true;

    return res.status(200).json(new ApiResponse(200, "Admin login successful"));
  } catch (error) {
    next(error);
  }
};

// GET /api/v1/admin/dashboard
export const getDashboard = async (req, res, next) => {
  try {
    const data = await adminService.getDashboardStats();

    return res
      .status(200)
      .json(new ApiResponse(200, "Dashboard data fetched", data));
  } catch (error) {
    next(error);
  }
};

// POST /api/v1/admin/logout
export const logout = async (req, res, next) => {
  try {
    req.session.destroy(() => {
      return res
        .status(200)
        .json(new ApiResponse(200, "Logged out successfully"));
    });
  } catch (error) {
    next(error);
  }
};
