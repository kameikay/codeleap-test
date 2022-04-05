import axios from "axios";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { useError } from "../../hooks/useError";
import { RootState } from "../../redux/store";
import { api } from "../../services/api";
import { Button } from "../Button";
import { Input } from "../Input";
import { InputField } from "../InputField";
import { Textarea } from "../Textarea";
import { NewPostContainer } from "./styles";

export function NewPost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useError();
  const username = useSelector((state: RootState) => state.username);
  const queryClient = useQueryClient();

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);

    if (!event.target.value) {
      setError({ fieldName: "title", message: "Title is required" });
    } else {
      removeError("title");
    }
  }

  function handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);

    if (!event.target.value) {
      setError({ fieldName: "content", message: "Content is required" });
    } else {
      removeError("content");
    }
  }

  async function handleSubmitPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title) {
      setError({ fieldName: "title", message: "Title is required" });
    } else if (!content) {
      setError({ fieldName: "content", message: "Content is required" });
    } else {
      removeError("title");
      removeError("content");

      try {
        await api.post(
          "/",
          {
            username: username.username,
            title,
            content,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setTitle("");
        setContent("");
        queryClient.invalidateQueries("posts");
      } catch {}
    }
  }

  return (
    <NewPostContainer>
      <h2>What's on your mind?</h2>

      <form onSubmit={(event) => handleSubmitPost(event)}>
        <InputField label="Title" error={getErrorMessageByFieldName("title")}>
          <Input
            type="text"
            placeholder="Title here..."
            value={title}
            onChange={(event) => handleTitleChange(event)}
            error={!!getErrorMessageByFieldName("title")}
          />
        </InputField>

        <InputField
          label="Content"
          error={getErrorMessageByFieldName("content")}
        >
          <Textarea
            placeholder="Content here..."
            value={content}
            onChange={(event) => handleContentChange(event)}
            error={!!getErrorMessageByFieldName("content")}
          />
        </InputField>

        <Button disabled={errors.length > 0} type="submit">
          Create
        </Button>
      </form>
    </NewPostContainer>
  );
}
