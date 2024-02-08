jest.useFakeTimers();
import PasswordInput from "~/components/PasswordInput";
import { render, screen, fireEvent } from "@testing-library/react-native";

test("passeword input component valid test", () => {
  render(<PasswordInput />);

  const passwordInput = screen.getByPlaceholderText("Password");
  const passwordInputIcon = screen.getByTestId("passwordInputIcon");

  expect(passwordInput).toBeTruthy();
  expect(passwordInputIcon.props.icon).toBe("eye-off");
  fireEvent.press(passwordInputIcon);

  expect(
    screen.getByPlaceholderText("Password").props.secureTextEntry
  ).toBeFalsy();
  expect(passwordInputIcon.props.icon).toBe("eye");
});
