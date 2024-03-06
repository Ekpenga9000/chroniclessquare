const withEmbeds = (editor) => {
    const { insertData, isInline, isVoid } = editor;
  
    editor.insertData = (element) => {
        const text = element.getData("text/plain");
  
        if (text) {
            const parsed = new DOMParser().parseFromString(text, "text/html");
            const fragment = deserialize(parsed.body);
            Transforms.insertFragment(editor, fragment);
            return;
        }
        return insertData(text);
    };
  
    return editor;
  
}; 

export default withEmbeds; 