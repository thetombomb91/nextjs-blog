import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"
import Highlight from "react-highlight.js"

const CodeBlock = ({ language, value }) => {
  return (
    // <SyntaxHighlighter
    //   language={language}
    //   style={tomorrow}
    //   wrapLines={true}
    //   showLineNumbers={true}
    // >
    //   {value}
    // </SyntaxHighlighter>
    /*{ <SyntaxHighlighter 
       language={language} 
       style={tomorrow} 
       wrapLines={true} 
       showLineNumbers={true}
     >
       {value}
     </SyntaxHighlighter> }*/
    //  <span>
    /* <div className="w-screen flex align-center justify-center">
      <div className="sm:w-3/5 w-11/12 bg-white flex justify-center align-center m-12"> */
    <div className="w-full flex align-center justify-center">
      <div className="w-full bg-white flex justify-center align-center m-2">
        <Highlight language={language}>
          {value}
        </Highlight>
      </div>
    </div>
    /* </div>
  </div>
  </span> */
  )
}

export default CodeBlock