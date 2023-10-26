import supertest from "supertest";
import app from "../../src/index";
import { resize } from "../utilities/resize";

const test = supertest(app);

describe("Test the main images endpoint", () => {
  it("Test if image 'flag.jpg' exist", async () => {
    await test.get("/images?file_name=flag&width=50&height=50").expect(200);
  });
});

describe("Test resize", () => {
  it("Test image flag is exist", async () => {
    const data = await resize("flag", 50, 50);
    expect(data).toEqual(true);
  });
});