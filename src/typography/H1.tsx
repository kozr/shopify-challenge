import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1<H1Props>`
  color: white;
  font-family: 'HKGrotesk Medium';
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`

interface H1Props {
  children: string
  textAlign?: string
}

export default (props: H1Props): JSX.Element => (
  <H1 {...props}>{props.children}</H1>
)
