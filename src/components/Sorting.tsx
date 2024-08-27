import styled from "styled-components";
import SelectBox, { SelectBoxItemType } from "../ui/SelectBox";

interface ISorting {
  setSort: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const sortList: SelectBoxItemType[] = [
  { name: "Default", value: "default" },
  { name: "Title [A-Z]", value: "title" },
  { name: "Title [Z-A]", value: "-title" },
  { name: "New ones first", value: "-year" },
  { name: "Old ones first", value: "year" },
];

// Styles
const SortBox = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0 20px;
  &:last-child {
    margin: 0;
  }
`;
const SortTitle = styled.div`
  font-size: var(--fs);
  margin: 0 16px 0 0;
`;

const Sorting: React.FC<ISorting> = ({ setSort, value }) => {
  return (
    <SortBox>
      <SortTitle>Sort by</SortTitle>
      <SelectBox handler={setSort} list={sortList} value={value} />
    </SortBox>
  );
};

export default Sorting;
