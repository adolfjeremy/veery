import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthButton from "../components/AuthButton";

const stories = {
    title: "AuthButton",
    component: AuthButton,
};

export default stories;

function TemplateStory(args) {
    return (
        <BrowserRouter>
            <AuthButton {...args} />
        </BrowserRouter>
    );
}

const WithTypePurple = TemplateStory.bind({});
WithTypePurple.args = {
    destination: "/login",
    type: "purple",
    content: "Sign In",
};
const WithTypeWhite = TemplateStory.bind({});
WithTypeWhite.args = {
    destination: "/register",
    type: "white",
    content: "Sign Out",
};

export { WithTypePurple, WithTypeWhite };
