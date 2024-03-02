"use client"; 
import { useDispatch } from "react-redux";
import { addContent } from "@redux/slices/articleSlice";
import { ContentDetails } from "@app/interfaces/interfaces";

const CodeInput = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const description = e.currentTarget.code.value;
    if (!description.trim()) return;
  
    const content: ContentDetails = {
      type: "code",
      value: description,
    };
    dispatch(addContent(content)); // Use the addContent function
    e.currentTarget.code.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <pre>
        <div className="flex items-start gap-2 border border-solid border-gray-500 bg-gray-200 rounded-md">
          <textarea
            name="code"
            id="code"
            cols={30}
            rows={10}
            className="p-4 rounded-md bg-transparent outline-none w-full"
            placeholder="enter code here..."
          ></textarea>
        </div>
      </pre>
      <div className="flex justify-end my-4">
        <button className="text-xs bg-gray-400 py-1 px-2 rounded-md">
          Add
        </button>
      </div>
    </form>
  );
};

export default CodeInput;
