import React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      name: "Button Size",
      control: {
        type: "select",
        options: ["sm", "rg"],
      },
    },
  },
};

export const DefaultButton = (args) => <Button {...args}>default</Button>;
