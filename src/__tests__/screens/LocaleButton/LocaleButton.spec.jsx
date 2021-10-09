import React from "react";
import { Button } from "antd";
import LocaleButton from "../../../screens/LocaleButton/LocaleButton";
import { shallow } from "enzyme";

describe("../../screens/LocaleButton/LocaleButton", () => {
  it("should render LocaleButton by default", () => {
    const localeButton = shallow(<LocaleButton />);

    expect(localeButton.find(Button)).toHaveLength(1);
  });

  it("should have a default state of en by default", () => {
    const localeButton = shallow(<LocaleButton />);

    expect(localeButton.instance().state.locale).toEqual("en");
  });
});
