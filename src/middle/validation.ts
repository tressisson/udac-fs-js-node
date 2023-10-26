import { Response, Request, NextFunction } from "express";
import { existsSync } from "fs";
import { join } from "path";


export const validate = (req: Request, res: Response, next: NextFunction): void => {
  const file_path = join(__dirname, `../../../images/${req.query.file_name}.jpg`);

  // checking all of the parameters to make sure they have values etc
  if (!req.query.file_name) {
    res.status(404).send("No file_name parameter");
  } else if (!req.query.width) {
    res.status(404).send("No width");
  } else if (Number.isNaN(parseInt(req.query.width as string))) {
    res.status(404).send("Width not a number");
  } else if (!req.query.height) {
    res.status(404).send("No height");
  } else if (Number.isNaN(parseInt(req.query.height as string))) {
    res.status(404).send("Height not a number");
  } else {
    next();
  }
};