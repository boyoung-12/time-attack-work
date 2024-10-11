"use client";

import React, { useState } from "react";
import { Todos } from "../type/Todo";

const TodoPage = () => {
  // const [todos, setTodos] = useState<Todos>([]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>my todo list</div>
      <div>
        <div>
          <p>제목</p>
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-[3px] rounded-md border-red-600"
          />
        </div>
        <div>
          <p>내용</p>
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            className="border-[3px] rounded-md border-red-600"
          />
        </div>
        <button onClick={() => handleAddTodo}>추가하기</button>
      </div>
      <h1>Working</h1>
      <div>
        <h1>알고리즘</h1>
        <p>자바스크립트 5문제 풀기</p>
        <button>시작하기</button>
        <button>완료</button>
      </div>
      <div>
        <h1>리액트</h1>
        <p>todo list 만들기</p>
        <button>시작하기</button>
        <button>완료</button>
      </div>
    </div>
  );
};

export default TodoPage;
