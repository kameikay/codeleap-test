import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { useError } from "../../hooks/useError";
import { RootState } from "../../redux/store";
import { api } from "../../services/api";
import { Button } from "../Button";
import { Input } from "../Input";
import { InputField } from "../InputField";
import { NewPost } from "../NewPost";
import { Textarea } from "../Textarea";
import { Container, Overlay } from "./styles";

interface IModalEditProps {
  setIsModalEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  postTitle: string;
  postContent: string;
  id: number;
}

export function ModalEdit({
  setIsModalEditOpen,
  postTitle,
  postContent,
  id
}: IModalEditProps) {
  const portalDiv = document.getElementById("modal-root") as Element;
  const [title, setTitle] = useState<string>(postTitle);
  const [content, setContent] = useState<string>(postContent);
  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useError();
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

  async function handleEditPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title) {
      setError({ fieldName: "title", message: "Title is required" });
    } else if (!content) {
      setError({ fieldName: "content", message: "Content is required" });
    } else {
      removeError("title");
      removeError("content");

      try {
        await api.patch(
          `/${id}/`,
          {
            title,
            content,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        queryClient.invalidateQueries("posts");
        setIsModalEditOpen(false);

      } catch {}
    }
  }
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <h2>
          Edit post <span>{postTitle}</span>
        </h2>

        <form onSubmit={(event) => handleEditPost(event)}>
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

          <div className="buttons">
            <Button
              className="cancel"
              onClick={() => setIsModalEditOpen(false)}
            >
              Cancel
            </Button>

            <Button disabled={errors.length > 0} className="edit" type="submit">
              Edit
            </Button>
          </div>
        </form>
      </Container>
    </Overlay>,
    portalDiv
  );
}
