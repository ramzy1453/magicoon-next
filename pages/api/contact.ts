import { sendMail } from "@/lib/sendMail";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message, subject } = req.body as Data;
    const mail = await sendMail({
      name,
      from: email,
      subject,
      text: message,
    });
    res.status(200).json(mail);
  }
}
