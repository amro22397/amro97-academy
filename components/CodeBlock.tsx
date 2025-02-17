"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react"; // Icons
import { Button } from "@/components/ui/button"; // ShadCN button (optional)
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({
  code,
  language = "javascript",
  height = 'h-[250px]',
  fileName
}: {
  code: any;
  language: string;
  height?: string;
  fileName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className={`relative bg-gray-900 text-white rounded-lg shadow-md overflow-hidden hover:overflow-auto
      pb-1 w-[650px] mb-10`} dir="ltr"
      
      >
        {/* <SyntaxHighlighter language={language} style={dracula}>
          {code}
        </SyntaxHighlighter> */}

        <div className="bg-gray-800 text-gray-300 px-4 pt-[14px] pb-[6px] text-sm font-mono">
          {fileName}
        </div>

        <pre className="overflow-x-auto px-4 pt-[14px] pb-[6px]
        ">
            <div className="flex flex-col">
            {code.split('\n').map((line: string, index: number) => (
                <code className="text-sm break-words whitespace-normal"
                key={line.split(' ')[3]}>{line}</code>
            ))}
            </div>
          
        </pre>

        <Button
          onClick={handleCopy}
          className="absolute top-[1.5px] right-[5px] 
          bg-transparent border-none text-white hover:bg-transparent hover:text-gray-300"
          variant="outline"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
    </>
  );
};

export default CodeBlock;