/**
 * skenario testing
 *
 * - SearchBar component
 *   - should handle keyword typing correctly
 *   - should change search params
 */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

import "@testing-library/jest-dom";

describe("Searchbar component", () => {
    it("should handle keyword typing correctly", async () => {
        render(
            <BrowserRouter>
                <SearchBar />
            </BrowserRouter>
        );
        const keywordInput = await screen.getByPlaceholderText(
            "Search for Thread"
        );
        await userEvent.type(keywordInput, "keywordtest");

        expect(keywordInput).toHaveValue("keywordtest");
    });
});
