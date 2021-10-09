import React from "react";
import { Button } from "antd";

export default class LocaleButton extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: "en",
    };
  }

  toggleLocale() {
    this.setState((prevState) => {
      return { locale: prevState.locale === "en" ? "cn" : "en" };
    });
  }

  render() {
    return (
      <Button onClick={() => this.toggleLocale()}>{this.state.locale}</Button>
    );
  }
}
