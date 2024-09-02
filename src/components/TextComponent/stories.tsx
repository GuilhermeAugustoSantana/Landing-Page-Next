import { Meta, StoryFn } from "@storybook/react";
import { TextComponent, TextComponentProps } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: "Dummy",
  },
  argTypes: {
    children: { type: "string" },
  },
} as Meta;

export const Template: StoryFn<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
