import { NavLinks, NavLinksProps } from ".";
import { Meta, StoryFn } from "@storybook/react";
import links from "./mock";
export default {
  title: "NavLinks",
  component: NavLinks,
  args: {
    links: links,
  },
} as Meta;

export const Template: StoryFn<NavLinksProps> = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
