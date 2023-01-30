import React from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
import style from './helloChat.module.css'

function LoaderChat() {
  return (
    <div className={style.page}>
      <GiArtificialIntelligence size={200} color='#DDDDDD' />
      <small>You are about to chat with Artificial Intelligence powered boat.</small>
      <small>Ask questions about coding, story, articles, news and many more.</small>
    </div>
  );
}

export default LoaderChat;
