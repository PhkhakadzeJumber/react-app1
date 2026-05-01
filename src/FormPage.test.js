import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormPage from "./FormPage";

test("renders form page", () => {
  render(<FormPage />);
  expect(screen.getByText(/Simple Form/i)).toBeInTheDocument();
});

