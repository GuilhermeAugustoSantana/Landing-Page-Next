import { Meta, StoryFn } from "@storybook/react";
import { GoTop } from ".";

export default {
  title: "GoTop",
  component: GoTop,
  args: {
    children: "Dummy",
  },
  argTypes: {
    children: { type: "string" },
  },
} as Meta;

export const Template: StoryFn<> = (args) => {
  return (
    <div style={{ height: "400vh" }}>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem non error
        consequatur debitis. Voluptatem, provident? Itaque, provident minima
        deleniti quas amet exercitationem esse repellat enim nulla cum.
        Consectetur, aspernatur excepturi.
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ratione
        voluptatum quo tempore voluptatem doloribus illo eaque magni rem neque
        quae nihil consequuntur nisi, provident laboriosam error unde. Eligendi,
        magni.
      </p>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem non error
        consequatur debitis. Voluptatem, provident? Itaque, provident minima
        deleniti quas amet exercitationem esse repellat enim nulla cum.
        Consectetur, aspernatur excepturi.
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ratione
        voluptatum quo tempore voluptatem doloribus illo eaque magni rem neque
        quae nihil consequuntur nisi, provident laboriosam error unde. Eligendi,
        magni.
      </p>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem non error
        consequatur debitis. Voluptatem, provident? Itaque, provident minima
        deleniti quas amet exercitationem esse repellat enim nulla cum.
        Consectetur, aspernatur excepturi.
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ratione
        voluptatum quo tempore voluptatem doloribus illo eaque magni rem neque
        quae nihil consequuntur nisi, provident laboriosam error unde. Eligendi,
        magni.
      </p>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem non error
        consequatur debitis. Voluptatem, provident? Itaque, provident minima
        deleniti quas amet exercitationem esse repellat enim nulla cum.
        Consectetur, aspernatur excepturi.
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ratione
        voluptatum quo tempore voluptatem doloribus illo eaque magni rem neque
        quae nihil consequuntur nisi, provident laboriosam error unde. Eligendi,
        magni.
      </p>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem non error
        consequatur debitis. Voluptatem, provident? Itaque, provident minima
        deleniti quas amet exercitationem esse repellat enim nulla cum.
        Consectetur, aspernatur excepturi.
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ratione
        voluptatum quo tempore voluptatem doloribus illo eaque magni rem neque
        quae nihil consequuntur nisi, provident laboriosam error unde. Eligendi,
        magni.
      </p>
      <GoTop {...args} />
    </div>
  );
};
