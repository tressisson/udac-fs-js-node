import sharp from "sharp";
import fs from "fs";
import { join } from "path";

export const resize = async (
  file_name: string,
  width: number,
  height: number
) => {
  const file_path = `thumb/${file_name}_${width}_${height}.jpg`;
  try {
    await sharp(join(__dirname, `../../images/${file_name}.jpg`))
      .resize({
        width: width,
        height: height,
      })
      .toFile(file_path);
    return fs.existsSync(file_path);
  } catch (err) {
    console.log(err);
  }
};