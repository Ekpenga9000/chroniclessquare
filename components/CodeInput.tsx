const CodeInput = () => {
  return (
    <form className="w-full">
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
