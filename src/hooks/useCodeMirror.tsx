import { defaultKeymap } from "@codemirror/commands";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorState } from "@codemirror/state";
import { oneDark } from "@codemirror/theme-one-dark";
import { keymap } from "@codemirror/view";
import { basicSetup, EditorView } from "codemirror";
import { useEffect, useRef, useState } from "react";

export interface UseCodeMirrorProps {
  initialDoc: string;
  onChange?: (state: EditorState) => void;
}
export const useCodeMirror = <T extends Element>({
  initialDoc,
  onChange,
}: UseCodeMirrorProps): [React.MutableRefObject<T | null>, EditorView?] => {
  const refContainer = useRef<T>(null);
  const [editorView, setEditorView] = useState<EditorView>();

  useEffect(() => {
    if (refContainer.current == null) {
      return;
    }

    const startState = EditorState.create({
      doc: initialDoc,
      extensions: [
        basicSetup,
        keymap.of(defaultKeymap),
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
          addKeymap: true,
        }),
        oneDark,
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (typeof onChange === "function") {
            onChange(update.state);
          }
        }),
      ],
    });
    const view = new EditorView({
      state: startState,
      parent: refContainer.current,
    });

    setEditorView(view);

    return () => {
      view.destroy();
    };
  }, [refContainer]);

  return [refContainer, editorView];
};
