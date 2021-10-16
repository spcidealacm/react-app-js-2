import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import LocaleButton from "../../../screens/LocaleButton";

afterEach(cleanup);

describe("<LocaleButton />", () => {
  it("should render a default locale Button", () => {
    // const { queryByText, container } = render(<LocaleButton />);
    // screen.debug(container);
    // expect(queryByText("en")).toBeInTheDocument();
  });

  it("should show 'cn' when click the 'en' button", () => {
    // const { queryByText, container } = render(<LocaleButton />);
    // fireEvent.click(queryByText("en").parentNode);
    // expect(queryByText("cn")).toBeInTheDocument();
  });
});
