import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LabledInput from "../common/LabledInput";
import { StyledDiv, StyledBtn } from "./styles";
import { useDispatch } from "react-redux";
import { addTodo } from "../../modules/todos";
import "./styles";

// Redux 기능, State 관리, 에러 처리, UUID 생성, 스타일링, 폼 제출 처리
export default function Input() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const getError = (error, params) => {
    if (error === "1") {
      return alert(`제목과 내용을 모두 입력해주세요.`);
    } else {
      return `404 ERROR
        페이지를 찾을 수 없습니다.`;
    }
  };

  const handleSubmitBtnClick = (e) => {
    e.preventDefault(); // not refresh

    const newTodo = { title, content, isDone: false, id: uuidv4() };

    if (!title || !content) {
      return getError("1", { title, content });
    }

    // todo를 추가하는 reducer 호출, 인자는 payload
    dispatch(addTodo(newTodo));

    setTitle("");
    setContent("");
  };

  return (
    <StyledDiv>
      <form onSubmit={handleSubmitBtnClick}>
        <LabledInput
          id="title"
          label="제목"
          placeholder="Please enter a title."
          value={title}
          onChange={handleTitleChange}
        />
        <LabledInput
          id="content"
          label="내용"
          placeholder="Please enter your content."
          value={content}
          onChange={handleContentChange}
        />
        <StyledBtn type="submit">추가하기</StyledBtn>
      </form>
    </StyledDiv>
  );
}
