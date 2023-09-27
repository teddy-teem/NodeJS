exports.health = (req, res) => {
  try {
    res.send({ status: "success", message: "Successfully Responsed" });
  } catch (error) {
    res.send(new Error({ error: "unknown issue occur" }));
  }
};
