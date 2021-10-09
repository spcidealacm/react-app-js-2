import React from "react";
import { ProjectSearchList } from "../../../screens/project-list/index";
import { act } from "react-dom/test-utils";
import { shallow, mount } from "enzyme";

jest.mock("../../../screens/project-list/list", () => ({
  default: jest.fn(),
  List: (props) => <div className="list" props={props} />,
}));

jest.mock("../../../screens/project-list/search-panel", () => ({
  default: jest.fn(),
  SearchPanel: (props) => <div className="search-panel" props={props} />,
}));

global.fetch = jest.fn((params) => {
  if (params.includes("/managers"))
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 3, name: "Vincent" }]),
    });

  if (params.includes("/projects?"))
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 3, name: "Vincent" }]),
    });

  return Promise.reject(new Error("404"));
});

describe("../../screens/project-list/index", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should render project list by default", async () => {
    let wrapper;

    await act(async () => {
      wrapper = await mount(<ProjectSearchList />);
      // Promise.resolve();
    });
  });
});
