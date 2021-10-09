import React from "react";
import { Table } from "antd";
import { List } from "../../screens/project-list/list";
import { shallow, mount } from "enzyme";

describe("../../screens/project-list/list", () => {
  const mockProps = (override) => ({
    list: [
      {
        id: 1,
        name: "Project1",
        manager_id: 3,
        tream_id: "Team One",
        created_id: 982396349,
      },
    ],
    managers: [{ id: 3, name: "Vincent" }],
    ...override,
  });

  it("should render table by default", () => {
    const props = mockProps();
    const wrapper = shallow(<List {...props} />);

    expect(wrapper.find(Table)).toHaveLength(1);
  });

  it("should render table", () => {
    const props = mockProps();
    const wrapper = mount(<List {...props} />);
    // console.log(wrapper.debug());

    expect(wrapper).toMatchSnapshot();
  });
});
