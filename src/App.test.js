import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./screens/project-list/list", () => ({
  default: jest.fn(),
  List: (props) => <div className="list" props={props} />,
}));

jest.mock("./screens/project-list/search-panel", () => ({
  default: jest.fn(),
  SearchPanel: (props) => <div className="search-panel" props={props} />,
}));

jest.mock("./screens/project-list/index", () => ({
  default: jest.fn(),
  ProjectSearchList: (props) => (
    <div className="project-search-list" props={props} />
  ),
}));

test("renders Hello World", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
