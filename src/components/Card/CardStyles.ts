import styled from "styled-components"
import { PlayOverlay } from "../../ui/Play"

// Styles
export const Item = styled.div`
  position: relative;
`
export const ItemBookMark = styled.div`
  --pd: 16px;
  position: absolute;
  right: var(--pd);
  top: var(--pd);
  @media screen and (max-width: 750px) {
    --pd: 8px;
  }
`
export const ImgBox = styled.div<{ $slide: boolean }>`
  margin: 0 0 8px;
  position: relative;
  img {
    border-radius: 8px;
    display: block;
    height: ${props => props.$slide ? '230px' : '174px'};
    object-fit: cover;
    width: 100%;
  }
  &:hover ${PlayOverlay} {
    opacity: 1;
    visibility: visible;
  }
  @media screen and (max-width: 1020px) {
    img { height: ${props => props.$slide ? '230px' : '140px'}; }
  }
  @media screen and (max-width: 750px) {
    img { height: ${props => props.$slide ? '140px' : '110px'}; }
  }
`
export const Meta = styled.div<{ $slide: boolean }>`
  --pad: 24px;
  ${props => props.$slide && `
    position: absolute;
    left: var(--pad);
    bottom: var(--pad);
    right: var(--pad);
  `}
  h4 {
    font-size: var(--${props => props.$slide ? 'M' : 'XS'});
    margin: 0;
  }
  @media screen and (max-width: 750px) {
    --pad: 16px;
  }
`
export const MetaTop = styled.div<{ $slide: boolean }>`
  color: rgba(255,255,255,0.75);
  display: flex;
  font-size: var(--${props => props.$slide ? 'fs' : 'BS'});
  margin: 0 0 5px;
`
export const MetaItem = styled.div`
  margin-right: 8px;
  padding-right: 11px;
  position: relative;
  &::after {
    background: rgba(255,255,255,0.75);
    border-radius: 3px;
    content: '';
    display: block;
    position: absolute;
    right: 0;
    height: 3px;
    width: 3px;
    top: 50%;
    margin-top: -1px;
  }
  &:last-child {
    margin: 0; padding: 0;
    &::after { content: none; display: none; }
  }
`
