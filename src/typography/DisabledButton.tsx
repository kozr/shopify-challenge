import React from 'react'
import styled from 'styled-components'

const DisabledButton = styled.button`
  display: none;
`

type PropWithChildren = {
  children: string
}

export default ({ children }: PropWithChildren): JSX.Element => (
  <DisabledButton>{children}</DisabledButton>
)
