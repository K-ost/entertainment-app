import styled from "styled-components";
import user from "../../assets/user.svg";

// Styles
export const Sidebar = styled.aside`
  background: var(--color-semi-dark);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: var(--app-pd);
  padding: 32px 12px;
  text-align: center;
  min-width: 96px;
  max-width: 96px;
  @media screen and (max-width: 1020px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    min-width: 0;
    margin-bottom: 0;
    max-width: none;
    padding: 20px 24px;
  }
  @media screen and (max-width: 750px) {
    border-radius: 0;
    padding: 16px;
    margin: 0;
  }
`;
export const Logo = styled.div`
  margin: 0 0 75px;
  img {
    display: block;
    margin: 0 auto;
  }
  @media screen and (max-width: 1020px) {
    margin: 0;
  }
  @media screen and (max-width: 750px) {
    img {
      width: 25px;
    }
  }
`;
export const AsideUser = styled.div`
  --size: 40px;
  a {
    background: url(${user}) center / 20px no-repeat;
    border: 1px solid var(--color-white);
    border-radius: 50%;
    display: block;
    height: calc(var(--size) + 2px);
    width: calc(var(--size) + 2px);
    margin: 0 auto;
  }
  img {
    border-radius: 50%;
    display: block;
    height: var(--size);
    object-fit: cover;
    width: var(--size);
    padding: 0;
  }
  @media screen and (max-width: 1020px) {
    --size: 32px;
  }
  @media screen and (max-width: 750px) {
    --size: 24px;
  }
`;
export const Nav = styled.nav`
  margin-bottom: auto;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      margin: 0 0 40px;
      a svg {
        display: block;
        margin: 0 auto;
      }
      a path {
        fill: var(--color-greyish);
      }
      a.active path {
        fill: var(--color-white);
      }
    }
  }
  @media screen and (max-width: 1020px) {
    margin: 0;
    ul {
      display: flex;
    }
    ul li {
      margin: 0 16px;
    }
  }
  @media screen and (max-width: 750px) {
    ul li {
      margin: 0 12px;
    }
    ul li a svg {
      width: 16px;
    }
  }
`;
