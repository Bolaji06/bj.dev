import type { MDXComponents } from "mdx/types";
import { ComponentPropsWithRef } from "react";
import { highlight } from "sugar-high"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const myTags = {
    code: ({ children, ...props}: ComponentPropsWithRef<'code'>) => {
      const codeHTML = highlight(children as string);
      return <code dangerouslySetInnerHTML={{__html: codeHTML}} {...props}/>
    }
  }
  return {
    ...components,
    ...myTags,
  };
}
