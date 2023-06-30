import type { MDXComponents } from "mdx/types";
import Image from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    ...components,
    h1: ({ children }) => <h1 className="text-white text-4xl">{children}</h1>,
    // img: (props: any) => <Image {...props} fill />,
    // code: ({ children }) => <div className="bg-gray-800 text-white p-5">{children}</div>
    blockquote: ({ children }) => (
      <blockquote className="child:content-none">{children}</blockquote>
    ),
  };
}
