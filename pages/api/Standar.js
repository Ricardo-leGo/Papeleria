// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import CryptoJS from "crypto-js";
 

export default function handler(req, res) {

  console.log(req, "=>>>>>>>>>>");

  res.status(200).json({ name: 'John Doe' })
}
