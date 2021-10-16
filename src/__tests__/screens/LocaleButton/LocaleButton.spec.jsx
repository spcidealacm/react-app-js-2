import React from "react";
import { Button } from "antd";
import LocaleButton from "../../../screens/LocaleButton/LocaleButton";
import { mount, shallow } from "enzyme";

describe("../../screens/LocaleButton/LocaleButton", () => {
  it("should render LocaleButton by default", () => {
    const localeButton = shallow(<LocaleButton />);

    expect(localeButton.find(Button)).toHaveLength(1);
  });

  it("should have a default state of cn by default", () => {
    const localeButton = shallow(<LocaleButton />);

    expect(localeButton.instance().state.locale).toEqual("cn");
  });

  it("should handle onClick", () => {
    const localeButton = shallow(<LocaleButton />);
    // const antdButton = localeButton.find(Button);

    localeButton.simulate("click");
    // localeButton.props().click();
    localeButton.update();

    expect(localeButton.instance().state.locale).toEqual("en");

    localeButton.simulate("click");
    localeButton.update();

    expect(localeButton.instance().state.locale).toEqual("cn");
  });
});
