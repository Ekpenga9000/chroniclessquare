"use client";

import EditorContextProvider from "./EditorContext";
import EditorElement from "./EditorElement";


const Editor = () => {
  return (
      <EditorContextProvider>
          <EditorElement/>
      </EditorContextProvider>
  )
}

export default Editor