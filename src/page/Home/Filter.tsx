import styled from "styled-components";

const FilterWrapper = styled.div`
  width: 540px;
  height: 39.88px;
  border: 2px solid black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filter = styled.input`
    width:500px;
    height:30px;
    border:0;

    &:focus {
        outline: none; 
`;
function FilterBar() {
  return (
    <>
      <FilterWrapper>
        <Filter type="text" placeholder="구인구직 찾아보기"></Filter>
      </FilterWrapper>
    </>
  );
}

export default FilterBar;
