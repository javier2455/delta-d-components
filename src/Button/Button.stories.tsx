import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Button,
  argTypes: {
    children: {
      description: "The button content",
    },
    variant: {
      type: "string",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "ghost",
      ],
      control: "select",
      description: "Colors variants",
    },
    outline: {
      type: "boolean",
      description: "Button Outline",
    },
    rounded: {
      type: "string",
      options: [" none", "sm", "md", "lg", "xl", "2xl", "full"],
      control: "select",
      description: "Button border radius",
    },
    size: {
      type: "string",
      options: ["sm", "md", "lg", "full"],
      control: { type: "radio" },
      description: "Button Size",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Button",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Button",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    variant: "danger",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    children: "Button Outline",
    outline: false,
  },
};
