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
function FilterBar() {
  return (
    <>
      <FilterWrapper>
        <Filter>당신의 전공을 선택해 주세요 </Filter>
      </FilterWrapper>
    </>
  );
}

export default FilterBar;
