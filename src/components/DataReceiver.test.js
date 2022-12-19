import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DataReceiver from "./DataReceiver";
import * as dataContext from "../api";

describe("DataReceiver", () => {
  it("renders 'Get new data' button", async () => {
    render(<DataReceiver />);

    const button = screen.getByText("Get new data");

    expect(button).toBeInTheDocument();
  });

  it("renders without errors with new data", async () => {
    const mySpy = jest
      .spyOn(dataContext, "getData")
      .mockImplementation(() => 11);
    render(<DataReceiver />);

    const button = screen.getByText("Get new data");
    userEvent.click(button);
    const result = screen.getByText("11");
    mySpy.mockClear();

    expect(result).toBeInTheDocument();
  });

  //TODO: turn this test on when the bug in react testing library will be fixed
  //https://github.com/testing-library/react-testing-library/issues/1068
  xit("renders ErrorFallback when getData() throws an exception", async () => {
    const mySpy = jest.spyOn(dataContext, "getData").mockImplementation(() => {
      throw Error("error");
    });
    render(<DataReceiver />);

    const button = screen.getByText("Get new data");
    act(() => button.click());
    console.log(button.click);

    const tryAgainButton = screen.getByText("Try again");
    mySpy.mockClear();

    expect(tryAgainButton).toBeInTheDocument();
  });
});
