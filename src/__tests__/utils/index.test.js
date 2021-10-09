import { isTrue, debounce } from "../../screens/utils/index";
import _ from "lodash";

describe("src/screens/utils/index", () => {
  describe("isTrue()", () => {
    it("should return true if value is 0", () => {
      expect(isTrue(0)).toEqual(true);
    });
  });

  describe("debounce()", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.spyOn(console, "log");
      console.log.mockImplementation(_.noop);
    });

    afterEach(() => {
      jest.useRealTimers();
      console.log.mockRestore();
    });

    it("should return A", () => {
      debounce(2000)("A");
      expect(console.log).not.toHaveBeenCalled();
      jest.advanceTimersByTime(2000);
      //   jest.runAllTimers();
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith("A");
    });

    it("should return A and B", () => {
      debounce(2000)("A");
      debounce(4000)("B");
      expect(console.log).not.toHaveBeenCalled();
      jest.advanceTimersByTime(2000);
      //   jest.runAllTimers();
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith("A");
      jest.runAllTimers();
      expect(console.log).toHaveBeenCalledTimes(2);
      expect(console.log).toHaveBeenLastCalledWith("B");
    });
  });
});
