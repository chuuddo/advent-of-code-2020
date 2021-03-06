const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");
const example = `mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
trh fvjkl sbzzf mxmxvkd (contains dairy)
sqjhc fvjkl (contains soy)
sqjhc mxmxvkd sbzzf (contains fish)`.split("\n");

describe("Day 21", () => {
  test("part 1 example", () => expect(part1(example)).toBe(5));
  test("part 2 example", () => expect(part2(example)).toBe("mxmxvkd,sqjhc,fvjkl"));
  test("part 1 data", () => expect(part1(data)).toBe(2614));
  test("part 2 data", () => expect(part2(data)).toBe("qhvz,kbcpn,fzsl,mjzrj,bmj,mksmf,gptv,kgkrhg"));
});
