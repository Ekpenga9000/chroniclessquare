const CodeInput = () => {
    return (
        <div className="flex items-start gap-2 border border-solid border-gray-500 bg-gray-200 rounded-md">
            {/* <label htmlFor="code" className="text-sm p-2">
                enter code here...
            </label> */}
            <textarea
            name="code"
            id="code"
            cols={30}
            rows={10}
                className="p-4 rounded-md bg-transparent outline-none monospace w-full"
                placeholder="enter code here..."
            ></textarea>
        </div>
    );
}
 
export default CodeInput;