import React from "react";
import { render } from "@testing-library/react-native";
import Home from "../../src/Home/Home";

describe("Home Component", () => {
    it("renders correctly", () => {
        const { getByText } = render(<Home />);
        expect(getByText("Home")).toBeTruthy();
    });

    it("matches snapshot", () => {
        const tree = render(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
