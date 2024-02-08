import { render, screen } from "@testing-library/react-native";
import Header from "~/components/Header";
test("header component valid test", () => {
  const title = "Test Title";
  render(<Header title={title} />);

  expect(screen.getByText(title)).toBeOnTheScreen();
});
