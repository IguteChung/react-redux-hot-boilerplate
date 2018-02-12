const html = (development) => {
  return `
    <html>
      <head>
        <title>React Redux Hot Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        ${development ? '' : '<link rel="stylesheet" href="styles.css" />'}
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id='root' />
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

export default html;
