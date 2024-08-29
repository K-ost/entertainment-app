import styled from "styled-components";

type PageTitleProps = {
  children: React.ReactNode;
  title: string;
};

// Styles
const PageHead = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 24px;
  h1 {
    margin: 0;
  }
`;

const PageTitle = (props: PageTitleProps): JSX.Element => {
  const { children, title } = props;

  return (
    <PageHead>
      <h1>{title}</h1>
      {children}
    </PageHead>
  );
};

export default PageTitle;
