// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  msg: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { fullName, email, message } = req.body;

  console.log(fullName, email, message);
  res.status(200).json({ msg: "Message sent successfully" });
}
