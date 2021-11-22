import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "./TodoFooter";

const MockTodoFooter = (props) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={props.tasks} />
    </BrowserRouter>
  );
};

it("Should render correct amount of tasks", () => {
  render(<MockTodoFooter tasks={10} />);
  const amountEl = screen.getByText("10 tasks left");
  expect(amountEl).toBeInTheDocument();
});

it("Should render single task", () => {
  render(<MockTodoFooter tasks={1} />);
  const amountEl = screen.getByText("1 task left");
  expect(amountEl).toBeInTheDocument();
});
