import React from "react";
import Avatar from "../components/Avatar";

const stories = {
    title: "Avatar",
    component: Avatar,
};

export default stories;

function TemplateStory(args) {
    return <Avatar {...args} />;
}

const WithTypeSmall = TemplateStory.bind({});
WithTypeSmall.args = {
    image: "https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random",
    type: "sm",
};
const WithTypeMedium = TemplateStory.bind({});
WithTypeMedium.args = {
    image: "https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random",
    type: "md",
};

export { WithTypeSmall, WithTypeMedium };
