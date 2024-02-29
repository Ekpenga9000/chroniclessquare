import React from "react";

const TextInput = () => {
  return (
    <form className="w-full">
      <textarea
        name="description"
        id="description"
        // cols={30}
        // rows={10}
        className="pt-1 pl-2 rounded-md bg-transparent outline-none w-full"
        placeholder="Text ..."
      ></textarea>
      <div className="flex justify-end my-4">
        <button className="text-xs bg-gray-400 py-1 px-2 rounded-md">
          Add
        </button>
      </div>
    </form>
  );
};

export default TextInput;
