"use client";

import { createContext, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import Paragraph from "@editorjs/paragraph";
import Image from "@editorjs/image";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Quote from "@editorjs/quote";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Checklist from "@editorjs/checklist";
import Strikethrough from "@sotaproject/strikethrough";
import InlineCode from "@editorjs/inline-code";
import Marker from "@editorjs/marker";
import ChangeCase from "editorjs-change-case";
import Underline from "@editorjs/underline";
import SimpleImage from "@editorjs/simple-image";
import ColorPlugin from "editorjs-text-color-plugin";
import AlignmentBlockTune from "editorjs-text-alignment-blocktune";
import Alert from "editorjs-alert";

export const EditorContext = createContext({});

const EditorContextProvider = (props) => {
  const editorInstanceRef = useRef<EditorJS | null>(null);
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Let`s write an awesome story!",
      tools: {
        textAlignment: {
          class: AlignmentBlockTune,
          config: {
            default: "left",
            blocks: {
              header: "center",
            },
          },
        },
        paragraph: {
          class: Paragraph,
          tunes: ["textAlignment"],
        },
        header: {
          class: Header,
          shortcut: 'CMD+SHIFT+H',
          inlineToolbar: true,
          tunes: ["textAlignment"],
          config: {
            placeholder: "Enter a title",
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3,
          },
        },
        alert: {
          class: Alert,
          config: {
            defaultType: "primary",
            messagePlaceholder: "Enter your message",
          },
        },
        list: {
          class: List,
          config: {
            defaultType: "unordered",
          },
        },
        Checklist: {
          class: Checklist,
        },
        image: {
          class: SimpleImage,
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              codepen: true,
              coub: true,
            },
          },
        },
        Underline: {
          class: Underline,
        },
        Strikethrough: {
          class: Strikethrough,
        },
        Marker: {
          class: Marker,
        },
        inlineCode: {
          class: InlineCode,
        },
        ChangeCase: {
          class: ChangeCase,
        },
        Color: {
          class: ColorPlugin,
          config: {
            colorCollections: [
              "#EC7878",
              "#A4D9D6",
              "#F3A467",
              "#F9F871",
              "#A4D9D6",
              "#F3A467",
              "#F9F871",
              "#A4D9D6",
              "#F3A467",
              "#F9F871",
              "#A4D9D6",
              "#F3A467",
              "#F9F871",
              "#A4D9D6",
              "#F3A467",
              "#F9F871",
              "#A4D9D6",
              "#F3A467",
              "#F9F871",
              "#A4D9D6",
              "#F3A467",
              "#F9F871",
              "#A4D9D6",
              "#F3A467",
              "#F9F871",
              "#A4D9D6",
              "#F3A467",
              "#F9F871",
              "#FFF",
            ],
            defaultColor: "#EC7878",
            customPicker: true,
          },
        },
      },
     
    });
    editorInstanceRef.current = editor;
  };
  return (
    <EditorContext.Provider value={{ editorInstanceRef, initEditor }}>
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
