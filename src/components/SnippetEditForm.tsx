'use client';
import type { Snippet } from '@/src/generated/prisma/client';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';
import { editSnipet } from '../actions';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({
  snippet: { id, title, code },
}: SnippetEditFormProps) {
  const [editorCode, setEditorCode] = useState(code);

  function handleEditorChange(value: string = '') {
    setEditorCode(value);
  }

  const editSnippetAction = editSnipet.bind(null, id, editorCode);

  return (
    <>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={editorCode}
        className=""
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </>
  );
}
