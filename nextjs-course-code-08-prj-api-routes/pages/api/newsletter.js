import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    console.log(userEmail);

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    console.log(userEmail);
  }
}

export default handler;
