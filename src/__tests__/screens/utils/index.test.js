import {
  isTrue,
  isFalsy,
  cleanObject,
  debounce,
} from "../../../screens/utils/index";
import _ from "lodash";

describe("src/screens/utils/index", () => {
  describe("isTrue()", () => {
    it("should return true if value is 0", () => {
      expect(isTrue(0)).toEqual(true);
    });

    it("should return value if value is not 0", () => {
      expect(isTrue(1)).toEqual(1);
    });
  });

  describe("isFalsy()", () => {
    it("should return false if value is 0", () => {
      expect(isFalsy(0)).toEqual(false);
    });

    it("should return false if value is undefined", () => {
      expect(isFalsy(undefined)).toEqual(true);
    });
  });

  describe("cleanObject()", () => {
    it("should return false if value is 0", () => {
      expect(cleanObject({ 1: "something", 2: undefined })).toEqual({
        1: "something",
      });
    });
  });

  describe("debounce()", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.spyOn(console, "log");
      console.log.mockImplementation(() => {});
    });

    afterEach(() => {
      jest.useRealTimers();
      console.log.mockRestore();
    });

    it("should return A", () => {
      debounce()("A"); // log("A")
      expect(console.log).not.toHaveBeenCalled(); // 0s
      jest.advanceTimersByTime(2000); // 2s -> 0.1s
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith("A"); // console.log("A")
    });

    it("should return B only if call two at the same time", () => {
      const log = debounce(); // should be the same setTimeout
      log("A");
      log("B");
      expect(console.log).not.toHaveBeenCalled();

      jest.runAllTimers();
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith("B");
    });
  });
});
