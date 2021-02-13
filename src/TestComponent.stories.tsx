import React from "react";
import TestComponent from './TestComponent';

export default {
  title: "TestComponent"
};

export const Primary = () => <TestComponent $color="red">Red Heading</TestComponent>;

export const Secondary = () => <TestComponent $color="green">Green Heading</TestComponent>;
