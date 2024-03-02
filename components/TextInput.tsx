"use client";
import React from "react";
import { ContentDetails } from "@app/interfaces/interfaces";
import { useDispatch } from "react-redux";
import { addContent } from "@redux/slices/articleSlice";

const TextInput = () => {
  const dispatch = useDispatch();
  // const content = [{type: 'text', value: 'some text'}, {type: 'code', value: 'some code'}];
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    const description = e.currentTarget.description.value;
    if (!description.trim()) return;

    const content: ContentDetails = {
      type: "text",
      value: description,
    };
    dispatch(addContent(content)); // Use the addContent function
    e.currentTarget.description.value = "";
  }
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <textarea
        name="description"
        id="description"
        className="pt-1 pl-2 rounded-md bg-transparent outline-none w-full"
        placeholder="Text ..."
      ></textarea>
      <div className="flex justify-end my-4">
        <button className="text-xs bg-gray-300 text-gray-500 py-1 px-2 rounded-md">
          Add
        </button>
      </div>
    </form>
  );
};

export default TextInput;
