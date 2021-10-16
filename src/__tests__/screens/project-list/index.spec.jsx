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
      json: () =>
        Promise.resolve([
          {
            id: 5,
            name: "Project3",
            manager_id: 3,
            tream_id: "Team One",
            created_id: 982396349,
          },
          {
            created_id: 982396349,
            id: 1,
            manager_id: 3,
            name: "Project1",
            tream_id: "Team One",
          },
        ]),
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
      Promise.resolve();
    });

    console.log(wrapper.debug());
  });

  it("should change the param project name", async () => {
    jest.useFakeTimers();
    let wrapper;

    await act(async () => {
      wrapper = await mount(<ProjectSearchList />);
    });

    //wrapper
    //  .find(".search-panel")
    //  .props()
    // {
    //   className:
    //   props: {
    //     param, setParam, managers
    //   }
    // }

    await act(async () => {
      await wrapper
        .find(".search-panel")
        .props()
        .props.setParam({ project_name: "Project3", manager_id: "" });

      jest.runAllTimers();
    });

    // jest.useRealTimers();
  });

  it("should handle unfetched managers", async () => {
    jest.useFakeTimers();
    let wrapper;

    global.fetch = jest.fn((params) => {
      if (params.includes("/projects?"))
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([]),
        });

      if (params.includes("/managers"))
        return Promise.resolve({
          ok: false,
        });
    });

    await act(async () => {
      wrapper = await mount(<ProjectSearchList />);
    });
  });
});
