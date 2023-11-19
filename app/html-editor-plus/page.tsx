'use client'
import { CSSEditor, HTMLEditor, JSEditor, useCSSEditor, useConsole, useHTMLEditor, useJSEditor } from "html-css-js-editor";
import { useRef, useState } from "react";

export default function Editor(){

    const [html, setHtml]  = useState('');
    const [css, setCss]  = useState('');
    const [js, setJs]  = useState('');

    const iframeRef = useRef()

    useHTMLEditor({value:html, iframeRef:iframeRef});
    useCSSEditor({value:css, iframeRef:iframeRef});
    useJSEditor({value:js, iframeRef:iframeRef});
    const {logs} = useConsole({iframeRef})


    return (
        <div className="lg:flex flex-col h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <div className="lg:flex lg:h-1/2">
        <div className="w-1/3 bg-indigo-900 p-8 text-white">
          <h1 className="text-3xl font-bold mb-6">HTML Editor</h1>
          <HTMLEditor editorProps={{height:'80%'}} IframeRef={iframeRef}/>
          
        </div>
        <div className="w-1/3 bg-pink-900 p-8 text-white">
          <h1 className="text-3xl font-bold mb-6">CSS Editor</h1>
          <CSSEditor editorProps={{height:'80%'}} IframeRef={iframeRef}/>
        </div>
        <div className="w-1/3 bg-blue-900 p-8 text-white">
          <h1 className="text-3xl font-bold mb-6">JS Editor</h1>
          <JSEditor editorProps={{height:'80%'}} IframeRef={iframeRef}/>
        </div>
      </div>
      <div className="lg:flex h-1/2">
      <div className="h-full w-4/5 bg-green-900 p-8 text-white">
        <h1 className="text-3xl font-bold mb-6">Output</h1>
        {/* Set the height to 50% */}
        <iframe ref={iframeRef as any} className="w-full h-3/4 bg-white rounded"></iframe>
      </div>
      <div className="h-full w-1/5 bg-yellow-900 p-8 text-white">
          <h1 className="text-3xl font-bold mb-6">Console</h1>
          <div className="h-2/3 bg-gray-800 text-white p-4 rounded overflow-y-auto">
            {/* Example log messages */}
            {
                logs?.map((log)=>(<>
                    {log.type === 'log' && <p className="text-green-400">{log.msg}</p>}
                    {log.type === 'warn' && <p className="text-yellow-400">{log.msg}</p>}
                    {log.type === 'error' &&  <p className="text-red-400">{log.msg}</p>}
                    </>
                ))
            }
            
          </div>
        </div>
      </div>
      
    </div>
      );
}