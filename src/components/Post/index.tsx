import React, { useState } from "react";
import {
  Container,
  PostContent,
  PostContentContainer,
  PostData,
  PostHeader,
} from "./styles";

import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { Post as PostType } from "../../types/Post.types";
import { getDifferenceTime } from "../../utils/getDifferenceTime";
import { ModalDelete } from "../ModalDelete";
import { ModalEdit } from "../ModalEdit";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export function Post({ id, username, created_datetime, title, content }: PostType) {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.username);
  return (
    <Container>
      {isModalDeleteOpen && (
        <ModalDelete setIsModalDeleteOpen={setIsModalDeleteOpen} id={id}/>
      )}

      {isModalEditOpen && (
        <ModalEdit
          setIsModalEditOpen={setIsModalEditOpen}
          postTitle={title}
          postContent={content}
          id={id}
        />
      )}

      <PostHeader>
        <h2>{title}</h2>

        {user.username === username && (
          <div className="actions">
            <button
              className="delete"
              onClick={() => setIsModalDeleteOpen(true)}
            >
              <RiDeleteBin2Fill size={24} />
            </button>
            <button className="edit" onClick={() => setIsModalEditOpen(true)}>
              <BiEdit size={24} />
            </button>
          </div>
        )}
      </PostHeader>

      <PostContentContainer>
        <PostData>
          <span>@{username}</span>

          <span>{getDifferenceTime(created_datetime)}</span>
        </PostData>

        <PostContent>{content}</PostContent>
      </PostContentContainer>
    </Container>
  );
}
