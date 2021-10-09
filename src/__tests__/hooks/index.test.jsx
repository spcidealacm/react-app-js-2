import { useCounter } from "../../hooks/index";

const mockSetState = jest.fn();

jest.mock("react", () => ({
  useState: (initial) => [initial, mockSetState],
}));

test("it can increment from 1 to 2", () => {
  const [_, increment] = useCounter(1);
  expect(mockSetState).toHaveBeenCalledTimes(0);

  increment();

  expect(mockSetState).toHaveBeenCalledWith(2);
});
