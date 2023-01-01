/**
 * skenario testing
 *
 * - Register component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when Sign Up button is clicked
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterInput from "./RegisterInput";

import "@testing-library/jest-dom";

describe("RegisterInput component", () => {
    it("should handle name typing correctly", async () => {
        render(<RegisterInput register={() => {}} />);
        const nameInput = await screen.getByPlaceholderText("Name");

        await userEvent.type(nameInput, "nametest");

        expect(nameInput).toHaveValue("nametest");
    });

    it("should handle email typing correctly", async () => {
        render(<RegisterInput register={() => {}} />);
        const emailInput = await screen.getByPlaceholderText("Email");

        await userEvent.type(emailInput, "emailtest@gmail.com");

        expect(emailInput).toHaveValue("emailtest@gmail.com");
    });

    it("should handle password typing correctly", async () => {
        render(<RegisterInput register={() => {}} />);
        const passwordInput = await screen.getByPlaceholderText("Password");

        await userEvent.type(passwordInput, "passwordtest");

        expect(passwordInput).toHaveValue("passwordtest");
    });

    it("should call Register function when Sign Up button is clicked", async () => {
        const mockRegister = jest.fn();
        render(<RegisterInput register={mockRegister} />);
        const nameInput = await screen.getByPlaceholderText("Name");
        await userEvent.type(nameInput, "nametest");
        const emailInput = await screen.getByPlaceholderText("Email");
        await userEvent.type(emailInput, "emailtest@gmail.com");
        const passwordInput = await screen.getByPlaceholderText("Password");
        await userEvent.type(passwordInput, "passwordtest");

        const registerButton = await screen.getByRole("button", {
            name: "Sign Up",
        });

        await userEvent.click(registerButton);

        expect(mockRegister).toBeCalledWith({
            name: "nametest",
            email: "emailtest@gmail.com",
            password: "passwordtest",
        });
    });
});
