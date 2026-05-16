import Nominee from "../models/nominee.model.js";
import { DEFAULT_NOMINEES } from "../utils/constants.js";

const seedNominees = async () => {
  console.log("🚀 Starting nominee seeding...");
  try {
    const existingCount = await Nominee.countDocuments();

    if (existingCount > 0) {
      console.log("ℹ️ Nominees already exist, skipping seed...");
      return;
    }

    const nominees = DEFAULT_NOMINEES.map((name) => ({
      name,
      votes: 0,
    }));

    await Nominee.insertMany(nominees);

    console.log("✅ Default nominees seeded successfully");
  } catch (error) {
    console.error("❌ Seeder failed:", error.message);
    process.exit(1);
  }
};

export default seedNominees;
