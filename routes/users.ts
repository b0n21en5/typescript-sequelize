const router = require("express").Router();
const { fetchAllUsers, fetchUserDetails } = require("../controllers/users");

/**
 * This router will return all users
 */
router.route("/get-all").get(fetchAllUsers);

router.route("/:uid").get(fetchUserDetails);

export default router;
