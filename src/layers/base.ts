export function generateBase(): string {
  return `@layer eden-base{
body{font-family:var(--eden-font-sans);background:var(--eden-bg);color:var(--eden-text);line-height:1.5;}
::selection{background:color-mix(in srgb,var(--eden-primary) 24%,transparent);}
:focus-visible{outline:2px solid var(--eden-primary);outline-offset:2px;}
h1,h2,h3,h4,h5,h6,p{margin:0;}
code,kbd,pre,samp{font-family:var(--eden-font-mono);}
}
`
}
