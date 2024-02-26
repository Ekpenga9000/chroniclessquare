"use client";
import { useState } from "react";
import { CodeSnippetProps } from "@app/interfaces/interfaces";

/* Create a new component called CodeSnippet. 
    This component would take in a prop that is a string and display it in a code block
    that can be copied by the user.
*/
const CodeSnippet = ({ code }: CodeSnippetProps) => {
  const handleCopied = () => {
    //copy the code to the clipboard
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div>
      <div className="flex justify-between bg-gray-500 text-white p-4">
        <span>
          <i className="bx bx-code-block"></i>
        </span>
        {!isCopied ? (
          <span onClick={handleCopied} className="cursor-pointer">
            <i className="bx bx-copy"></i> Copy
          </span>
        ) : (
          <span>
            <i className="bx bx-check"></i> Copied
          </span>
        )}
      </div>
      <div>
        <pre
          style={{
            backgroundColor: "#f4f4f4",
            padding: "1rem",
            borderRadius: "4px",
            overflowX: "auto",
          }}
        >
          <code style={{ fontFamily: "Consolas, monospace" }}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
