import React from "react";
import { Heading } from "./Heading";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    fontColor: {
      name: "Font Color",
      type: { name: "string", required: false },
      control: "color",
    },
    fontSize: {
      name: "Font Size",
      control: {
        type: "select",
        options: [100, 200, 300, 400, 500, 600, 700],
      },
    },
    fontWeight: {
      name: "Font Weight",
      control: {
        type: "select",
        options: [400, 700],
      },
    },
  },
};

export const DefaultHeading = (args) => <Heading {...args}>Default Heading</Heading>;
