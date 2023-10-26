import { Router, Response, Request } from "express";
import { join } from "path";
import { resize } from "../../utilities/resize";
import { promises as fsp } from "fs";
import fs from "fs";
import { validate } from "../../middle/validation";

const route = Router();

route.get("/", validate, async (req: Request, res: Response) => {
  const file_name = req.query.file_name as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  const thumbdir = join(__dirname, "../../../thumb");
  const filepath = join(__dirname,`../../../thumb/${file_name}_${width}_${height}.jpg`);

  if (!fs.existsSync(thumbdir)) {
    try {
      fsp.mkdir(thumbdir);
      console.log("Create thumb directory");
    } catch (err) {
      console.log(err);
    }
  }

  if (!fs.existsSync(filepath)) {
    await resize(file_name, width, height);
    console.log("Create Image");
  }

  res.status(200).sendFile(filepath);
  console.log("Image sended");
});

export default route;