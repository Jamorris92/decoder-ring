// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  describe("error handling", () => {
    it("Should return false in shift is 0, < -25, > 25, or not present", () => {
      const actual = caesar("titans", 0);
      const expected = false;
      expect(actual).to.eql(expected);
    });
  });
  describe("encoding a message", () => {
    it("Should ignore captial letters", () => {
      const actual = caesar("tiTans", 1);
      const expected = "ujubot";
      expect(actual).to.eql(expected);
    });
    it("Should maintain spaces and other characters", () => {
      const actual = caesar("a b c", 1);
      const expected = "b c d";
      expect(actual).to.eql(expected);
    });
    it("Should wrap around the alphabet after Z", () => {
      const actual = caesar("xyz", 1);
      const expected = "yza";
      expect(actual).to.eql(expected);
    });
    it("Should wrap around to Z after A when going in reverse", () => {
      const actual = caesar("abc", -1);
      const expected = "zab";
      expect(actual).to.eql(expected)
    });
});
   describe("decoding a message", () => {
    it("Should ignore captial letters", () => {
      const actual = caesar("tiTans", 1);
      const expected = "ujubot";
      expect(actual).to.eql(expected);
    });
    it("Should maintain spaces and other characters", () => {
      const actual = caesar("a b c", 1);
      const expected = "b c d";
      expect(actual).to.eql(expected);
    });
    it("Should wrap around the alphabet after Z", () => {
      const actual = caesar("xyz", 1);
      const expected = "yza";
      expect(actual).to.eql(expected);
    });
    it("Should wrap around to Z after A when going in reverse", () => {
      const actual = caesar("abc", -1);
      const expected = "zab";
      expect(actual).to.eql(expected)
    })
  });
});