import { useCounter } from "../../hooks/index";
// import {useState} from 'react'
// import xxx from 'third-party'

const mockSetState = jest.fn();

// rewire
jest.mock("react", () => ({
  useState: (initial) => [initial, mockSetState],
}));

// jest.mock("third-party", () => ({
//   default: (initial) => [initial, mockSetState],
// }));

test("it can increment from 1 to 2", () => {
  const [_, increment] = useCounter(1);
  expect(mockSetState).toHaveBeenCalledTimes(0);

  increment();

  expect(mockSetState).toHaveBeenCalledWith(2);
});
