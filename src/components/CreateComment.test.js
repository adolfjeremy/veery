/**
 * skenario testing
 *
 * - CreateComment component
 *   - should handle comment typing correctly
 *   - should call addComment function when post comment button is clicked
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateComment from "./CreateComment";

import "@testing-library/jest-dom";

describe("CreateComment component", () => {
    it("should handle comment typing correctly", async () => {
        render(<CreateComment threadId="thread-1" addComment={() => {}} />);
        const commentTextArea = await screen.getByPlaceholderText(
            "create your comment"
        );
        await userEvent.type(commentTextArea, "commenttest");

        expect(commentTextArea).toHaveValue("commenttest");
    });

    it("should call login function when Sign In button is clicked", async () => {
        const mockAddComment = jest.fn();
        render(
            <CreateComment threadId="thread-1" addComment={mockAddComment} />
        );
        const commentTextArea = await screen.getByPlaceholderText(
            "create your comment"
        );
        await userEvent.type(commentTextArea, "commenttest");

        const postCommentButton = await screen.getByRole("button", {
            name: "post comment",
        });

        await userEvent.click(postCommentButton);

        expect(mockAddComment).toBeCalledWith({
            threadId: "thread-1",
            content: "commenttest",
        });
    });
});
