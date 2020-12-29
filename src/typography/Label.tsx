import React from 'react'
import styled from 'styled-components'

const Label = styled.label<Label>`
  color: rgba(255, 255, 255, 0.6);
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-size: 23px;
  padding: 5px 0 5px 0;
  margin-right: 10px;
  margin-top: 5px;
  padding-left: ${({ paddingLeft }) => paddingLeft ?? '10px'};
  padding-right: ${({ paddingRight }) => paddingRight ?? '10px'};
  border-radius: 0px;
  display: inline-block;
`

interface Label {
  paddingLeft?: string
  paddingRight?: string
  children: string
  for: string
}

export default (props: Label): JSX.Element => (
  <Label {...props}>{props.children}</Label>
)
