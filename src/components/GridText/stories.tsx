import { Meta, StoryFn } from "@storybook/react/*";
import { GridText, GridTextProps } from ".";
import mock from "./mock";

export default {
  title: "GridText",
  component: GridText,
  args: mock,
} as Meta;

export const Template: StoryFn<GridTextProps> = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};
