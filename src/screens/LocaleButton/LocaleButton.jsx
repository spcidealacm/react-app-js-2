import React from "react";
import { Button } from "antd";

export default class LocaleButton extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: "cn",
    };
  }

  toggleLocale() {
    this.setState((prevState) => {
      return { locale: prevState.locale === "cn" ? "en" : "cn" };
    });
  }

  render() {
    return (
      <Button onClick={() => this.toggleLocale()}>{this.state.locale}</Button>
    );
  }
}
