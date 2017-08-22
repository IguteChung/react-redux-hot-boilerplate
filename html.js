const html = (development) => {
  return `
    <html>
      <head>
        <title>React Redux Hot Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        ${development ? '' : '<link rel="stylesheet" href="styles.css" />'}
      </head>
      <body>
        <div id='root' />
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

export default html;
