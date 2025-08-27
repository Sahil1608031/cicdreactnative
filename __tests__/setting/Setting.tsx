import React from "react";
import { render } from "@testing-library/react-native";
import Setting from "../../src/setting/Setting";
describe("Setting Component", () => {
    it("renders correctly", () => {
        const { getByText } = render(<Setting />);
        expect(getByText("Setting")).toBeTruthy();
    });

    it("matches snapshot", () => {
        const tree = render(<Setting />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
