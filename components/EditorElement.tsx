"use client";

import { useContext, useEffect, useRef } from "react";
import { EditorContext } from "./EditorContext";
import TitleInput from "./TitleInput";
import { StoreProvider } from "@redux/StoreProvider";

const EditorElement = () => {
  const { initEditor, editorInstanceRef } = useContext(EditorContext);
  const editorRef = useRef<null | boolean>(null);

  const handleClick = async () => {
    const outputData = await editorInstanceRef.current.save();
    console.log("Article data: ", outputData);
  };

  useEffect(() => {
    if (!editorRef.current) {
      initEditor();
      editorRef.current = true;
    }
  }, [initEditor]);

  return (
    <StoreProvider>
      <div>
        <div>
          <h1 className="text-lg md:text-2xl lg:text-3xl my-4 font-bold">
            Write your article
          </h1>
          <TitleInput />
        </div>
        <div id="editorjs"></div>
        <div className="md:flex justify-end">
          <button
            className="bg-purple-600 text-white text-sm px-4 py-2"
            onClick={handleClick}
          >
            <i className='bx bx-cloud-upload'></i> Publish
          </button>
        </div>
      </div>
    </StoreProvider>
  );
};

export default EditorElement;
