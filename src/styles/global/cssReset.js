export default `
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  input,
  textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  html {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: inline-block;
  }

  caption,
  th,
  td {
    text-align: left;
    font-weight: normal;
    vertical-align: middle;
  }

  q,
  blockquote {
    quotes: none;
  }

  q:before,
  q:after,
  blockquote:before,
  blockquote:after {
    content: '';
  }

  a img {
    border: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  button {
    background: none;
    border: 0;
    padding: 0;
    box-shadow: none;
    font-size: inherit;
  }

  hr {
    clear: both;
  }

  * {
    box-sizing: border-box;
  }

  input,
  textarea {
    border-radius: 0;
  }

  // custom reset styles
  *,
  *:after,
  *:before {
    outline: none;
  }

  html,
  body {
    width: 100%;
  }
`;
