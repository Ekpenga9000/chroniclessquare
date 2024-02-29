"use client";
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import CodeInput from "./CodeInput";
import TextInput from "./TextInput";
import TitleInput from "./TitleInput";

const TopicForm = () => {
  const [code, setCode] = useState<string | undefined>("");
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [isTextEditor, setIsTextEditor] = useState(true);
  const [isCodeEditor, setIsCodeEditor] = useState(false);
  const [title, setTitle] = useState("");

  const handleCodeEditor = () => {
    setIsTextEditor(false);
    setIsOptionVisible(false);
    setIsCodeEditor(true);
  };
  const handleTextEditor = () => {
    setIsTextEditor(true);
    setIsOptionVisible(false);
    setIsCodeEditor(false);
  };

  return (
    <div className="w-full lg:w-1/2 pt-4">
      <h1 className="text-4xl font-bold mb-8">Create a new topic</h1>
      <TitleInput />
      <div className="flex items-start gap-2 relative">
        <div>
          <button
            type="button"
            className="text-sm"
            onClick={() => setIsOptionVisible((prev) => !prev)}
          >
            {!isOptionVisible ? (
              <i className="bx bx-plus text-3xl text-gray-500"></i>
            ) : (
              <i className="bx bx-x text-3xl text-gray-500"></i>
            )}
          </button>
          {isOptionVisible ? (
            <ul className="absolute top-1 left-10 p-0 bg-slate-100 px-1 z-50">
              <li
                className="cursor-pointer text-gray-400 inline-block me-2 hover:text-gray-700 text-sm"
                onClick={handleTextEditor}
              >
                <i className="bx bx-text"></i>Text{" "}
              </li>
              <li
                className="cursor-pointer text-gray-400 inline-block hover:text-gray-700 text-sm"
                onClick={handleCodeEditor}
              >
                <i className="bx bx-code-curly"></i> Code
              </li>
            </ul>
          ) : null}
        </div>
        {isTextEditor && (
          <TextInput />
        )}
        {isCodeEditor && <CodeInput />}
      </div>
      <div className="flex justify-end">
        <button className="bg-purple-700 text-white p-2 rounded-md">
          Publish
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default TopicForm;
