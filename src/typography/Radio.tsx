import React from 'react'
import styled from 'styled-components'
import { InferProps } from 'prop-types'

type StyledRadio = {
  value: string
  name: string
  checked: boolean
  onChange?: (e: KeyboardEvent) => void
  onKeyUp?: (e: KeyboardEvent) => void
}

// Using InferredProps because it's interesting
type InferredProps = InferProps<StyledRadio>

const Radio = styled.input.attrs({
  type: 'radio',
})<InferredProps>``

export default (props: InferredProps): JSX.Element => <Radio {...props}></Radio>
