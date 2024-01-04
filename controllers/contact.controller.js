const getContacts = (req, res) => {
  res.status(201).send("Get all contacts");
};
const createContacts = (req, res) => {
  res.status(201).send("create contacts");
};
const getContactsId = (req, res) => {
  res.status(201).send(`get contacts ${req.params.id}`);
};
const updateContacts = (req, res) => {
  res.status(201).send(`update all contacts ${req.params.id}`);
};
const deleteContacts = (req, res) => {
  res.status(201).send(`delete contacts ${req.params.id}`);
};

module.exports = {
  getContacts,
  createContacts,
  getContactsId,
  updateContacts,
  deleteContacts,
};
