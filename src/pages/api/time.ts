import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  time: Date;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ time: new Date() });
}
