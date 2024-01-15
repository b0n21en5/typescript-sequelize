import { deleteUser, updateUserController } from "../controllers/users";

const router = require("express").Router();
import { fetchAllUsers, fetchUserDetails } from "../controllers/users";

/**
 * This router will return all users
 */
router.route("/get-all").get(fetchAllUsers);

/**
 * This router will return user details
 */
router.route("/:uid").get(fetchUserDetails);

/**
 * This router will delete user
 */
router.route("/:uid").delete(deleteUser);

/**
 * This router will update user
 */
router.route("/:uid").put(updateUserController);

export default router;
