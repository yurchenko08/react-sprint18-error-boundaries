import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DataList from "./DataList";
import * as dataContext from "../api";

describe("DataList", () => {
  it("renders without errors", async () => {
    const mySpy = jest
      .spyOn(dataContext, "getData")
      .mockImplementation(() => 1);
    render(<DataList />);

    const divs = screen.getAllByText("Data received:");
    mySpy.mockClear();

    expect(divs).toHaveLength(3);
  });

  it("calls getData() function", async () => {
    const mySpy = jest
      .spyOn(dataContext, "getData")
      .mockImplementation(() => 1);
    render(<DataList />);

    expect(mySpy).toHaveBeenCalledTimes(3);
    mySpy.mockClear();
  });

  it("renders ErrorFallback on errors", async () => {
    const mySpy = jest.spyOn(dataContext, "getData").mockImplementation(() => {
      throw Error("error");
    });
    render(<DataList />);

    const divs = screen.getAllByText("Something went wrong:");
    mySpy.mockClear();

    expect(divs).toHaveLength(3);
  });

  it("ErrorFallback has TryAgain button that resets error boundary", async () => {
    let mySpy = jest.spyOn(dataContext, "getData").mockImplementation(() => {
      throw Error("error");
    });
    render(<DataList />);

    const tryAgainButtons = screen.getAllByText("Try again");
    mySpy.mockClear();
    mySpy = jest.spyOn(dataContext, "getData").mockImplementation(() => 1);
    userEvent.click(tryAgainButtons[0]);
    mySpy.mockClear();
    const div = screen.getByText("Data received:");

    expect(div).toBeInTheDocument();
  });  
});
