import styled from "styled-components"

interface IPageTitle {
  children: React.ReactNode
  title: string
}

// Styles
const PageHead = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 24px;
  h1 { margin: 0; }
`

const PageTitle: React.FC<IPageTitle> = ({ children, title }) => {
  return (
    <PageHead>
      <h1>{title}</h1>
      {children}
    </PageHead>
  )
}

export default PageTitle
