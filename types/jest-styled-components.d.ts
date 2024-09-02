/* eslint-disable */
import { Plugin, NewPlugin } from 'pretty-format';

declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: symbol;
      sample?: string | RegExp | object | Array<any> | Function;
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined;

    interface Options {
      media?: string;
      modifier?: string;
      supports?: string;
    }

    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R;
      toHaveStyle(value?: string | object)
      toHaveAttribute(value?: string, value?: string): R
      toBeInTheDocument(): R
    }
  }
}

export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin>;
