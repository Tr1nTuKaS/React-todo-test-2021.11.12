import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders Header with a little prop", () => {
  //Arrange
  render(<Header title="SomeTitle" />);
  //Act

  //Assert
  const headerEl = screen.getByRole("heading", { name: "SomeTitle" });
  expect(headerEl).toBeInTheDocument();
  //   expect(headerEl).toHaveTextContent("SomeTitle");
});

it("should render same text passed into title prop", async () => {
  render(<Header title="My Header" />);
  const headingEl = screen.getByText(/my header/i);
  expect(headingEl).toBeInTheDocument();
});

// it("should render same text passed into title prop", async () => {
//   render(<Header title="My Header" />);
//   const headingEl = screen.getByRole("heading");
//   expect(headingEl).toBeInTheDocument();
// });

// it("should render same text passed into title prop", async () => {
//   render(<Header title="My Header" />);
//   const headingEl = screen.getByRole("heading", { name: "My Header" });
//   expect(headingEl).toBeInTheDocument();
// });

// it("should render same text passed into title prop", async () => {
//   render(<Header title="My Header" />);
//   const headingEl = screen.getByTitle("Header");
//   expect(headingEl).toBeInTheDocument();
// });

// it("should render same text passed into title prop", async () => {
//   render(<Header title="My Header" />);
//   const headingEl = screen.getByTestId("header-1");
//   expect(headingEl).toBeInTheDocument();
// });

//FindBy

// it("should render same text passed into title prop", async () => {
//   render(<Header title="My Header" />);
//   const headingEl = await screen.findByText(/my header/i);
//   expect(headingEl).toBeInTheDocument();
// });

//QueryBy

// it("should render same text passed into title prop", async () => {
//   render(<Header title="My Header" />);
//   const headingEl = screen.queryByText(/dogs/i);
//   expect(headingEl).not.toBeInTheDocument();
// });

// it("should render same text passed into title prop", async () => {
//   render(<Header title="My Header" />);
//   const headingEl = screen.getAllByRole("heading");
//   expect(headingEl.length).toBe(2);
// });
