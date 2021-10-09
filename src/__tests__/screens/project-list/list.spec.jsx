import React from "react";
import { Table } from "antd";
import { List } from "../../../screens/project-list/list";
import { shallow, mount } from "enzyme";

describe("../../screens/project-list/list", () => {
  const makeProps = (override) => ({
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
    const props = makeProps();
    const wrapper = shallow(<List {...props} />);

    expect(wrapper.find(Table)).toHaveLength(1);

    expect(wrapper.find(Table).props().columns).toEqual([
      {
        title: "Project Name",
        dataIndex: "project_name",
        key: "project_name",
      },
      { title: "Manager", dataIndex: "manager", key: "manager" },
    ]);
  });

  it("should render table", () => {
    const props = makeProps();
    const wrapper = mount(<List {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render table when manager's id is not equal manager's in the project", () => {
    const props = makeProps({
      list: [
        {
          id: 1,
          name: "Project1",
          manager_id: 1,
          tream_id: "Team One",
          created_id: 982396349,
        },
      ],
    });
    const wrapper = shallow(<List {...props} />);

    expect(wrapper.find(Table)).toHaveLength(1);

    expect(wrapper.find(Table).props().dataSource).toEqual([
      { key: 1, project_name: "Project1", manager: "unknown" },
    ]);
  });
});
