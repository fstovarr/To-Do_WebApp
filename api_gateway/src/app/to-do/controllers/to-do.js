export const GetWelcome = async function (req, res) {
  res.status(200).json({ message: "Welcome" });
};
