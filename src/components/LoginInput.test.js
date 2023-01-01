/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when Sign In button is clicked
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginInput from "./LoginInput";

import "@testing-library/jest-dom";

describe("LoginInput component", () => {
    it("should handle email typing correctly", async () => {
        render(<LoginInput login={() => {}} />);
        const emailInput = await screen.getByPlaceholderText("Email");

        await userEvent.type(emailInput, "emailtest@gmail.com");

        expect(emailInput).toHaveValue("emailtest@gmail.com");
    });

    it("should handle password typing correctly", async () => {
        render(<LoginInput login={() => {}} />);
        const passwordInput = await screen.getByPlaceholderText("Password");

        await userEvent.type(passwordInput, "passwordtest");

        expect(passwordInput).toHaveValue("passwordtest");
    });

    it("should call login function when Sign In button is clicked", async () => {
        const mockLogin = jest.fn();
        render(<LoginInput login={mockLogin} />);
        const emailInput = await screen.getByPlaceholderText("Email");
        await userEvent.type(emailInput, "emailtest@gmail.com");
        const passwordInput = await screen.getByPlaceholderText("Password");
        await userEvent.type(passwordInput, "passwordtest");

        const loginButton = await screen.getByRole("button", {
            name: "Sign In",
        });

        await userEvent.click(loginButton);

        expect(mockLogin).toBeCalledWith({
            email: "emailtest@gmail.com",
            password: "passwordtest",
        });
    });
});
