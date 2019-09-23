import {
  getInstitution,
  listInstitution,
  createInstitution,
  patchInstitution,
  deleteInstitution,
  listInstitutionUser,
  addInstitutionUser,
  deleteInstitutionUser,
} from '../app/institution';

export default {
  create: async (req, res) => {
    const { name, streetAddress, city, state } = req.body;
    try {
      const institution = await createInstitution(req.user._id, name, streetAddress, city, state);
      res.send(institution);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const institution = await getInstitution(req.user, id);
      res.send(institution);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  patch: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, streetAddress, city, state } = req.body;
      const institution = await patchInstitution(req.user, id, {
        name,
        streetAddress,
        city,
        state,
      });
      res.send(institution);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  list: async (req, res) => {
    try {
      const institutionList = await listInstitution(req.user);
      res.send(institutionList);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const institution = await deleteInstitution(req.user, id);
      res.status(200).send(institution);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  addUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { emailAddress, role } = req.body;
      const instUser = await addInstitutionUser(req.user, id, { emailAddress, role });
      res.send(instUser);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  listUser: async (req, res) => {
    try {
      const { id } = req.params;
      const users = await listInstitutionUser(req.user, id);
      return res.send(users);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id, institutionUserId } = req.params;
      const res = await deleteInstitutionUser(req.user, id, institutionUserId);
      return res.send(res);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
};