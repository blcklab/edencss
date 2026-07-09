export function generateReset(): string {
  return `@layer eden-reset{
*,*::before,*::after{box-sizing:border-box;}
html{-webkit-text-size-adjust:100%;text-rendering:optimizeLegibility;}
body{margin:0;min-width:320px;}
img,picture,video,canvas,svg{display:block;max-width:100%;}
button,input,textarea,select{font:inherit;}
button{cursor:pointer;}
a{color:inherit;text-decoration:none;}
ul,ol{padding:0;margin:0;list-style:none;}
}
`
}
