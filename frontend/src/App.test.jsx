import { render, screen } from "@testing-library/react";
import { expect, test, beforeEach } from "vitest";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
});

test("shows Login/Register when logged out", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: /login\/register/i })).toBeInTheDocument();
});
