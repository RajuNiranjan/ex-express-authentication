const express = require("express");
const {
  getContacts,
  createContacts,
  getContactsId,
  updateContacts,
  deleteContacts,
} = require("../controllers/contact.controller.js");

const router = express.Router();

router.route("/").get(getContacts).post(createContacts);

router
  .route("/:id")
  .get(getContactsId)
  .put(updateContacts)
  .delete(deleteContacts);

module.exports = router;
