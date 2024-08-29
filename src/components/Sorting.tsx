import styled from "styled-components";
import SelectBox, { SelectBoxItemType } from "../ui/SelectBox";

type SortingProps = {
  setSort: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

const sortList: SelectBoxItemType[] = [
  { name: "Default", value: "default" },
  { name: "Title [A-Z]", value: "title-asc" },
  { name: "Title [Z-A]", value: "title-desc" },
  { name: "New ones first", value: "year-desc" },
  { name: "Old ones first", value: "year-asc" },
];

// Styles
const SortBox = styled.div`
  align-items: center;
  display: flex;
`;
const SortTitle = styled.div`
  font-size: var(--fs);
  margin: 0 16px 0 0;
`;

const Sorting = (props: SortingProps): JSX.Element => {
  const { setSort, value } = props;
  return (
    <SortBox>
      <SortTitle>Sort by</SortTitle>
      <SelectBox handler={setSort} list={sortList} value={value} />
    </SortBox>
  );
};

export default Sorting;
