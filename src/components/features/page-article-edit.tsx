import { EditorState } from "@codemirror/state";
import styled from "@emotion/styled";
import { Box } from "components/shared/box";
import { useCodeMirror } from "hooks/useCodeMirror";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

const S = {
  PageArticleEdit: styled(Box)``,
  PreviewContainer: styled(Box)``,
  EditorContainer: styled(Box)``,
};

const plugins = [remarkGfm];

export const PageArticleEdit: React.FC = () => {
  const [content, setContent] = useState<string>("# Google game good time and good trip");

  const handleOnChangeContent = (state: EditorState): void => {
    setContent(state.doc.toJSON().join("\n"));
  };

  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: content,
    onChange: handleOnChangeContent,
  });

  useEffect(() => {}, [editorView]);

  return (
    <S.PageArticleEdit>
      <S.EditorContainer ref={refContainer}></S.EditorContainer>
      <S.PreviewContainer>
        <ReactMarkdown
          remarkPlugins={plugins}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className ?? "");
              return (inline === false || inline === undefined) && match !== null ? (
                <SyntaxHighlighter style={prism} language={match[1]} PreTag="div">
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}></code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </S.PreviewContainer>
    </S.PageArticleEdit>
  );
};
