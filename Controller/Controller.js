const users = require("../Model/Model");

exports.creatUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = new users(req.body);
    await user.save();
    res.status(200).send({ message: "user has been created!", user });
  } catch (error) {
    res.status(500).send({ message: "Failed to create user!", error });
  }
};

exports.getuser = async (req, res) => {
  try {
    const all_users = await users.find();
    res.status(200).send({ msg: "Users list found", all_users: all_users });
  } catch (error) {
    res.status(500).send({ msg: "failed to find users list!" });
  }
};

exports.delete_user = async (req, res) => {
  const id = req.params.id;
  try {
    const delete_user = await users.findByIdAndDelete(id);
    res
      .status(200)
      .send({ msg: "user has benn deleted", user_deleted: delete_user });
  } catch (error) {
    res.status(500).send({ msg: "failed to delete user" });
  }
};

exports.updateuser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await users.findByIdAndUpdate(id, { $set: req.body });
    res.status(200).send({ msg: "user has benn updated", user_updated: user });
  } catch (error) {
    res.status(500).send({ msg: "failed to update" });
  }
};
