import React, { useEffect, useState } from "react";
import style from "./chatContainer.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";

const LoadingGpt = () => {
  const [dot, setDot] = useState(".");
  useEffect(() => {
    if (dot.length > 3) {
      setDot(".");
    } else {
      setTimeout(() => {
        setDot((prev) => prev + ".");
      }, 500);
    }
  }, [dot]);
  return (
    <div className={style.loading}>
      <BsFillChatDotsFill />
      <span className={style.loadingDot}>{dot}</span>
    </div>
  );
};

function ChatContainer({ userQuery, loading }) {
  return (
    <div className={style?.chats}>
      {userQuery?.map((query) =>
        query?.user ? (
          <div className={style.user}>
            <span>{query?.query}</span>
            <AiOutlineUser />
          </div>
        ) : (
          <div className={style.gpt}>
            <span>{query?.query}</span>
          </div>
        )
      )}
      {loading ? <LoadingGpt /> : null}
    </div>
  );
}

export default ChatContainer;
