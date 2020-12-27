// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface InputTheme {
    width?: string
    height?: string
    fontSize?: string
  }
}
