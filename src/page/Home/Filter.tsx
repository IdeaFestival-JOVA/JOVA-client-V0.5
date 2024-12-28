import { useState } from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  width: 540px;
  height: 39.88px;
  border: 2px solid black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Filter = styled.div`
  width: 500px;
  height: 30px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function FilterBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FilterWrapper onClick={handleModal}>
        <Filter>당신의 전공을 선택해 주세요</Filter>
      </FilterWrapper>
      {isModalOpen && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            <ModalClose onClick={closeModal}>x</ModalClose>
            <h2>전공을 선택해 주세요!</h2>
          </Modal>
        </>
      )}
    </>
  );
}

export default FilterBar;
