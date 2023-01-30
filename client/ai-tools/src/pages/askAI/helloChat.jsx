import React, { useRef, useState } from "react";
import { api } from "../../axios/api";
import ChatContainer from "./chatContainer/chatContainer";
import style from "./helloChat.module.css";
import LoaderChat from "./loaderChat";

function HelloChat() {
  const [query, setQuery] = useState("");
  const [userQuery, setUserQuery] = useState([]);
  const [loading, setLoading] = useState(false);
  const queryRef = useRef(null);

  const setQueryToGPT = async (ques) => {
    let url = "/topic/details";
    setLoading(true);
    const res = await api.post(url, { prompt: ques });
    if (res?.status === 200 && res?.data?.choices) {
      let gpt = res?.data?.choices?.[0]?.text;
      setUserQuery((prev) => [...prev, { query: gpt, user: false }]);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  const onQuery = (e) => {
    e.preventDefault();
    setUserQuery((prev) => [...prev, { query: query, user: true }]);
    setQueryToGPT(query);
    setQuery("");
  };
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <main className={style["main-box"]}>
      {userQuery?.length > 0 ? <ChatContainer userQuery={userQuery} loading={loading} /> : <LoaderChat />}
      
      <form onSubmit={onQuery} className={style["user-input"]}>
        <input
          ref={queryRef}
          value={query}
          onChange={handleQuery}
          className={`${style["user-input-text"]}`}
          disabled={loading}
        />
        <button disabled={loading} type='submit' className='btn btn-primary'>
          Send
        </button>
      </form>
    </main>
  );
}

export default HelloChat;
