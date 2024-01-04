const express = require("express");
const {
  getContacts,
  createContacts,
  getContactsId,
  updateContacts,
  deleteContacts,
} = require("../controllers/contact.controller.js");

const router = express.Router();

router.route("/").get(getContacts);

router.route("/").post(createContacts);

router.route("/:id").get(getContactsId);
router.route("/:id").put(updateContacts);

router.route("/:id").delete(deleteContacts);

module.exports = router;
