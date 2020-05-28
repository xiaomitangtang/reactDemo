import React, { useState } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker, Emoji } from 'emoji-mart'
// 代码展示器
import { PrismLight as SyntaxHighlighter, Prism } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
SyntaxHighlighter.registerLanguage('jsx', jsx);
// 走势线
import { Sparklines, SparklinesLine, SparklinesCurve, SparklinesSpots, SparklinesBars } from 'react-sparklines';

let codeStr = `
<>
    <div>EmojiDemo</div>
    <div>
      {emoji ? <Emoji emoji={emoji} size={60} /> : null}
    </div>
    <Picker set='apple' onSelect={(data) => {
      console.log(data)
      setStr(data)
    }} />
    <hr/>
    <Prism language='jsx' >
      {}
    </Prism>
  </>
`
const SparkOptions = {
  data: [5, 10, 5, 20, 8, 15],
  width: 100,
  height: 20,
  margin: 5
}
export default () => {
  let [emoji, setStr] = useState();

  return <>
    <div>react-sparklines</div>
    <Sparklines {...SparkOptions} >
      <SparklinesLine color='red' style={{ fill: "none" }} />
      <SparklinesSpots />
    </Sparklines>
    <Sparklines {...SparkOptions}>
      <SparklinesCurve />
    </Sparklines>
    <Sparklines {...SparkOptions}>
      <SparklinesBars />
    </Sparklines>
    <div>EmojiDemo</div>
    <div>
      {emoji ? <Emoji emoji={emoji} size={60} /> : null}
    </div>
    <Picker set='apple' onSelect={(data) => {
      console.log(data)
      setStr(data)
    }} />
    <hr />
    <div>react-syntax-highlighter</div>
    <Prism language='jsx' >
      {codeStr}
    </Prism>
    <hr />
  </>
}

