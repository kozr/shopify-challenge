import React from 'react'
import styled from 'styled-components'

const Button = styled.button``

export default (props: any): JSX.Element => (
  <Button {...props}>{props.children}</Button>
)
