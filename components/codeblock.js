import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

const CodeBlock = ({ language, value }) => {
  return (
    <div className="w-full flex align-center justify-center">
      <div className="w-full bg-white flex justify-center align-center m-2 text-sm">
        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          wrapLines={true}
          showLineNumbers={true}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeBlock