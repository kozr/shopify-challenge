import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: white;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-size: 23px;
  padding: 0 20px 0 20px;
  border-radius: 5px;
  display: inline-block;
`

interface ButtonProps {
  children?: string
  onClick: () => void
}

export default (props: ButtonProps): JSX.Element => (
  <Button {...props}>{props.children}</Button>
)
