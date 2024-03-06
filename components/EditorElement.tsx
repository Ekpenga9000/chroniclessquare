"use client";

import { useContext, useEffect, useRef } from "react";
import { EditorContext } from "./EditorContext";

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
    <div>
      <div id="editorjs"></div>
      <button
        className="bg-black text-white text-sm px-4 py-2"
        onClick={handleClick}
      >
        Publish
      </button>
    </div>
  );
};

export default EditorElement;
