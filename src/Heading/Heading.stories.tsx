import React from "react";
import { Heading } from "./Heading";

export default {
  title: "Heading",
};

export const Primary = () => <Heading fontColor="red">Red Heading</Heading>;

export const Secondary = () => (
  <Heading as="h4" fontColor="green">Green Heading</Heading>
);
