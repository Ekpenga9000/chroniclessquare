"use client";
import { useState } from "react";
import Link from "next/link";
import PopularTags from "@app/components/PopularTags";
import CodeSnippet from "@app/components/CodeSnippet";
import Content from "@app/components/Content";


const page = () => {
  const [isVoted, setIsVoted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleToggleState = (arg: boolean, func: Function) => {
    func(!arg);
  };

  return (
    <section className="flex justify-center bg-purple-700">
      <div className="container-custom min-h-50 shadow-md bg-slate-50">
        <div className="bg-gray-900 text-white">
          <h1 className="text-white text-2xl md:text-4xl word-break font-semibold md:font-bold mb-4 md:mb-8 p-4">
            Configuring MySql with Prisma ORM and TypeScript for a Next.js
            Application.
          </h1>
          <div className="flex items-center pl-5 gap-2">
            <Link
              href={"/profile"}
              className="bg-purple-600 text-lg md:text-2xl px-3 py-1.5 rounded-md text-white font-semibold"
            >
              C
            </Link>
            <div className="my-4">
              <Link href={"/profile"}>
                <address className="text-gray-300 hover:text-white">
                  coder123
                </address>
              </Link>
              <span className="text-sm text-gray-500">Mar, 23 2024</span>
            </div>
          </div>
          <div className="flex items-center gap-2 border border-y border-gray-500 py-1 pl-4 relative">
            <span className="mr-4 text-sm text-gray-300">590 votes</span>
            {!isVoted ? (
              <span
                onClick={() => handleToggleState(isVoted, setIsVoted)}
                className="text-sm text-gray-300 cursor-pointer"
              >
                <i className="bx bxs-up-arrow text-gray-500"></i> vote
              </span>
            ) : (
              <span
                onClick={() => handleToggleState(isVoted, setIsVoted)}
                className="text-sm cursor-pointer"
              >
                <i className="bx bxs-up-arrow text-green-500"></i> voted
              </span>
            )}
            <div className="absolute right-4 flex justify-between">
              {!isBookmarked ? (
                <span
                  className="cursor-pointer text-sm text-gray-300"
                  onClick={() =>
                    handleToggleState(isBookmarked, setIsBookmarked)
                  }
                >
                  <i className="bx bx-bookmark-alt-plus"></i>Save
                </span>
              ) : (
                <span
                  className="cursor-pointer text-sm"
                  onClick={() =>
                    handleToggleState(isBookmarked, setIsBookmarked)
                  }
                >
                  <i className="bx bxs-bookmark-alt-plus"></i>Saved
                </span>
              )}
              <span className="ml-4 text-sm text-gray-300">
                <i className="bx bx-coffee-togo"></i>Buy Coffee
              </span>
            </div>
          </div>
          <div className="pl-4 pb-4">
            <PopularTags
              title="Tags"
              tags={[
                "Next-MySql configuration",
                "React-Redux",
                "TypeScript",
                "React-Query",
                "Next-Auth",
              ]}
            />
          </div>
        </div>
        <div className="p-4 md:px-8">
         <Content/>
          <CodeSnippet
            code={`
    <div>
      <h1>Code Snippet Example</h1>
      <CodeSnippet code={codeExample} />
    </div>
    `}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
