const router = require("express").Router();
const { fetchAllUsers } = require("../controllers/users");

/**
 * This router will return all users
 */
router.route("/get-all").get(fetchAllUsers);

export default router;
