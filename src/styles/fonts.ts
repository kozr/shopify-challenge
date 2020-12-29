import { createGlobalStyle } from 'styled-components'

import HKGrotesk from './HKGrotesk-Regular.otf'
import HKGroteskLight from './HKGrotesk-Light.otf'
import HKGroteskMedium from './HKGrotesk-Medium.otf'

export default createGlobalStyle`
    @font-face {
        font-family: 'HKGrotesk';
        src: url(${HKGrotesk}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'HKGrotesk Light';
        src: url(${HKGroteskLight}) format('truetype');
        font-weight: 100;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
      font-family: 'HKGrotesk Medium';
      src: url(${HKGroteskMedium}) format('truetype');
      font-weight: 100;
      font-style: normal;
      font-display: auto;
  }
    #root {
      font-family: 'HKGrotesk'
    }
`
