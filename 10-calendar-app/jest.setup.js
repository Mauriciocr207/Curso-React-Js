import "whatwg-fetch";
// import "setimmediate";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.test",
});

jest.mock("./src/app/helpers/getEnv", () => ({
  __esModule: true,
  default: jest.fn(() => ({ ...process.env })),
}));