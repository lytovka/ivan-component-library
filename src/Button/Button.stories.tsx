import React from "react";
import { Button } from "./Button";

export default { 
    title: "Button",
    component: Button
}

export const DefaultButton = (args) => <Button {...args}>default</Button>;
