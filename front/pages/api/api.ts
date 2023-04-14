import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    res.status(200).json({ name: 'John Doe' })
  } else {
    // Handle any other HTTP method
  }
}