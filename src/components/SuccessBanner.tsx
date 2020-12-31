import React from 'react'
import styled from 'styled-components'

const Notice = styled.div<BannerProps>`
  display: ${({ isDisplay }) => (isDisplay ? 'block' : 'none')};
  color: white;
  padding: 20px;
  background-color: green; /* Red */
  margin-bottom: 15px;
  font-size: 23px;
`

type BannerProps = {
  isDisplay: boolean
}

const SucessBanner = (props: BannerProps): JSX.Element => {
  return <Notice {...props}>Thanks for nominating 5 movies.</Notice>
}

export default SucessBanner
