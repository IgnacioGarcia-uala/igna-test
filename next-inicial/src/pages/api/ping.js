export default function ping(req, res) {
    res.status(200).json({ message: "pong" });
  }