"use client";
import { useState } from "react";
import Link from "next/link";
import PopularTags from "@components/PopularTags";
import CodeSnippet from "@components/CodeSnippet";
import Content from "@components/Content";
import { randomizeColor, getFirstLetter } from "@app/utils/utils";

const page = () => {
  const [isVoted, setIsVoted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const creatorId = "1234";
  const topicId = "1234";

  const handleToggleState = (arg: boolean, func: Function) => {
    func(!arg);
  };

  return (
    <section className="flex justify-center bg-white">
      <div className="container-custom min-h-50 shadow-md bg-slate-50">
        <div className="bg-gray-900 text-white">
          <h1 className="text-white text-2xl md:text-4xl word-break font-semibold md:font-bold mb-4 md:mb-8 p-4">
            Configuring MySql with Prisma ORM and TypeScript for a Next.js
            Application.
          </h1>
          <div className="flex items-center pl-5 gap-2 relative">
            <Link
              href={"/profile"}
              className={`${randomizeColor()} text-lg md:text-2xl px-3 py-1.5 rounded-md text-white font-semibold`}
            >
              C
            </Link>
            <div className="my-4">
              <Link href={`/profile/${creatorId}`}>
                <address className="text-gray-300 hover:text-white">
                  coder123
                </address>
              </Link>
              <span className="text-sm text-gray-500">Mar, 23 2024</span>
            </div>
            <div className="absolute right-4">
              <Link href={`/topic/edit/${topicId}`} className="text-2xl mx-4 text-gray-300">
                <i className="bx bx-edit-alt"></i>
              </Link>
              <span className="text-gray-300 cursor-pointer text-2xl">
                <i className="bx bx-trash"></i>
              </span>
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
          <Content />
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
