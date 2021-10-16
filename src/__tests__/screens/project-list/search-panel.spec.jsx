import React from "react";
import { Input, Select } from "antd";
import { SearchPanel } from "../../../screens/project-list/search-panel";
import { shallow, mount } from "enzyme";

describe("../../screens/project-list/list", () => {
  const makeProps = (override) => ({
    managers: [
      { id: 1, name: "Tianyang Guan" },
      { id: 2, name: "Raymond" },
      { id: 3, name: "Vincent" },
      { id: 4, name: "Alex" },
    ],
    param: {
      manager_id: "",
      project_name: "",
    },
    setParam: () => {},
    ...override,
  });

  it("should trigger onChange", () => {
    const setParamSpy = jest.fn();

    const props = makeProps({ setParam: setParamSpy });
    const wrapper = shallow(<SearchPanel {...props} />);
    wrapper
      .find(Input)
      .props()
      .onChange({ target: { value: "123" } });

    expect(setParamSpy).toHaveBeenCalledTimes(1);
    expect(setParamSpy).toHaveBeenCalledWith({
      manager_id: "",
      project_name: "123",
    });
  });

  it("should trigger Select onChange", () => {
    const setParamSpy = jest.fn();

    const props = makeProps({ setParam: setParamSpy });
    const wrapper = shallow(<SearchPanel {...props} />);
    wrapper.find(Select).props().onChange("123");

    expect(setParamSpy).toHaveBeenCalledTimes(1);
    expect(setParamSpy).toHaveBeenCalledWith({
      manager_id: "123",
      project_name: "",
    });
  });
});
