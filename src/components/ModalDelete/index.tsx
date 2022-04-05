import React from "react";
import ReactDOM from "react-dom";
import { useQueryClient } from "react-query";
import { api } from "../../services/api";
import { Container, Overlay } from "./styles";

interface IModalDeleteProps {
  id: number;
  setIsModalDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalDelete({ id, setIsModalDeleteOpen }: IModalDeleteProps) {
  const portalDiv = document.getElementById("modal-root") as Element;
  const queryClient = useQueryClient();
  
  async function handleDelete() {
    await api.delete(`/${id}/`);
    queryClient.invalidateQueries("posts");
    setIsModalDeleteOpen(false);
  }
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <h1>Delete post</h1>

        <p>Are you sure you want to delete this item?</p>

        <div className="buttons">
          <button
            className="cancel"
            onClick={() => setIsModalDeleteOpen(false)}
          >
            Cancel
          </button>
          <button className="delete" onClick={() => handleDelete()}>
            Delete
          </button>
        </div>
      </Container>
    </Overlay>,
    portalDiv
  );
}
