import styled from "styled-components"

type BtnSize = 'small' | 'large'
type BtnColor = 'danger' | 'secondary'

interface IBtn {
  color?: BtnColor
  disabled?: boolean
  expand?: boolean
  handler: any
  size?: BtnSize
  title: string
}

// Styles
const Button = styled.button<{ $color: BtnColor, $expand: boolean, $size: BtnSize }>`
  background: var(--color-${props => props.$color});
  border: 0;
  border-radius: 6px;
  color: var(--color-${props => props.$color === 'danger' ? 'white' : 'dark'});
  cursor: pointer;
  display: ${props => props.$expand ? 'block' : 'inline-block'};
  font-family: var(--ff);
  font-size: var(--fs);
  line-height: 20px;
  outline: none;
  padding: 14px 24px;
  text-align: center;
  transition: all 200ms ease-in-out;
  width: ${props => props.$expand ? '100%' : 'auto'};
  ${props => props.$size === 'small' && `
    width: 34px;
    height: 34px;
    padding: 0;
  `}
  &:hover {
    background: var(--color-white);
    color: var(--color-semi-dark);
  }
  &:disabled {
    background: var(--color-${props => props.$color}) !important;
    cursor: default;
    opacity: 0.5;
  }
`

const Btn: React.FC<IBtn> = ({ color = 'danger', disabled, expand = false, handler, size = 'large', title }) => {
  return (
    <Button $expand={expand} $color={color} $size={size} onClick={() => handler()} disabled={disabled}>
      {title}
    </Button>
  )
}

export default Btn
