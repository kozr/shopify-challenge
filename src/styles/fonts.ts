import { createGlobalStyle } from 'styled-components'

import HKGrotesk from './HKGrotesk-Regular.otf'
import HKGroteskLight from './HKGrotesk-Light.otf'

export default createGlobalStyle`
    @font-face {
        font-family: 'HKGrotesk';
        url(${HKGrotesk}) format('otf');
        src: url(${HKGrotesk}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'HKGrotesk Light';
        url(${HKGroteskLight}) format('otf');
        src: url(${HKGroteskLight}) format('truetype');
        font-weight: 100;
        font-style: normal;
        font-display: auto;
    }
`