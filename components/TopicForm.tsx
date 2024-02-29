"use client";
import React from "react";
import CodeInput from "./CodeInput";

const TopicForm = () => {
  return (
    <div className="w-full lg:w-1/2 pt-4">
      <h1 className="text-4xl font-bold mb-8">Create a new topic</h1>
      <form className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <label htmlFor="title" className="cursor-pointer">
            <i className="bx bx-plus text-3xl text-gray-500"></i>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="p-2 rounded-md bg-transparent outline-none text-2xl"
            placeholder="Title ..."
          />
        </div>
        <div className="flex items-start gap-2">
          <label htmlFor="description" className="text-sm">
            <i className="bx bx-plus text-3xl text-gray-500"></i>
          </label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={10}
            className="pt-1 pl-2 rounded-md bg-transparent outline-none"
            placeholder="Text ..."
          ></textarea>
        </div>
        <div>
          <CodeInput />
        </div>
        <div className="flex justify-end">
          <button className="bg-purple-700 text-white p-2 rounded-md">
            Publish
          <i className='bx bx-right-arrow-alt'></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TopicForm;
