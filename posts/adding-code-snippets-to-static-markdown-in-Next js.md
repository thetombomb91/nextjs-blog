---
title: "Adding code snippets to static markdown in Next.js using react-syntax-highlighter"
description: "Good looking code snippets make your tutorials more readable and easier for others to follow. Here we look at using react-syntax-highlighter to provide beautiful code highlighting in our static Next.js sites"
date: "2021-02-20"
categories: 
  - "next.js"
  - "programming"
  - "topPost"
---

**Not tested (yet) with react-markdown 6.0 release, working with react-markdown 5.0.3**

I recently fully converted my Wordpress blog completely to static generated Next.js and it came with some difficulties. One problem was that git gists would not easily work in my static markdown files. I needed way to share formatted pieces of code with my users. 

So I used react-syntax-highlighter and you should too for highlighting code snippets in your static markdown files in Next.js. You'll see I am using it for all the code snippets in this post. 

## Step Zero: (Pre-requisites)

*If you are already using the [React Markdown](https://github.com/remarkjs/react-markdown)* *npm package to render your markdown into HTML then you can skip this step.* 

In order to allow for code highlighting, we want to be using the [React Markdown](https://github.com/remarkjs/react-markdown) package to render our markdown. The reason for this is that we can set the *renderers* property to use our custom code highlighting component. 

Install the React Markdown package and place the ReactMarkdown tag where you want your markdown rendered. **The "source" property should be set to the raw markdown for your posts**.

```jsx
// Command for installing react-markdown
npm install react-markdown 
```

```jsx
<ReactMarkdown source={postData.markdown} />
```

If you created your Next.js using the starter tutorial provided by Next.js you may be using remark to convert your markdown to HTML. We don't want that and want to use ReactMarkdown like above. If you have the getPostData(id) method, you will want to refactor it to return the markdown data. You can remove the other data returned if you do not need it.

```jsx
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        markdown: matterResult.content,
        ...matterResult.data
    }
}
```

You see that in the return statement I have added the markdown data. We are then able to access the markdown data and pass that along to our newly added ReactMarkdown package we added. 

## Step One: Installing react-syntax-highlighter

First, we will install the react-syntax-highlighter package. In the terminal in the root of your project, run the following command:

```jsx
npm install react-syntax-highlighter --save
```

This will add react-syntax-highlighter to our package.json. 

## Step Two: Creating our custom CodeBlock component

Next we will need to create a custom CodeBlock component. This is where we will set the styles and other properties related to the react-syntax-highlighter. 

Create a file name codeblock.js in your components folder and add the following code to it.

```jsx
// components/codeblock.js
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

const CodeBlock = ({ language, value }) => {
  return (
        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          wrapLines={true}
          showLineNumbers={true}
        >
          {value}
        </SyntaxHighlighter>
  )
}

export default CodeBlock
```

The above code will render our code snippet where the {value} tag is. And we are setting a few properties to our Syntax Highlighter such as style & showLineNumbers. For a full list of properties, check out the GitHub Readme for [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter). 

*Note: If you want to have any CSS styling around your code snippets, this is a good place to do it. Wrap the <SyntaxHighlighter> in a div or two and add your styling.* 

## Step Three: Using our custom CodeBlock

Now that we have our custom codeblock.js created we need to tell ReactMarkdown to use this when it sees any code blocks. We can do that with the below code.

```jsx
// Don't forget to import codeblock at the top of your file
import CodeBlock from "../../components/codeblock"

<ReactMarkdown source={postData.markdown} renderers={{ code: CodeBlock }} />
```

This tells ReactMarkdown that when it is going to render code from our markdown, it should use the CodeBlock component we created. 

## Step Four: Add code to our markdown files

Now that we have Next.js all ready to format our beautiful code, we need to put some code into our markdown files. For this we use standard markdown syntax, three back ticks \`\`\` to begin the code and three more \`\`\` at the end of our code. These are on the key to the left of number 1. It often helps to put the ticks on their own line as well.

The three ticks signify to expect code in between. And now that we are telling ReactMarkdown how to render our code, you should get syntax highlighting just like in this blog post!