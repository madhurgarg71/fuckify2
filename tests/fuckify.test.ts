import { fuckify } from "../src";

test("Fuck string correctly", function () {
  expect(fuckify("you")).toBe("F**ck you!");
});
