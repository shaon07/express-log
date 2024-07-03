export const log = (req, res, next) => {
  const stringifySafe = (obj) => {
      const seen = new WeakSet();
      return JSON.stringify(obj, (key, value) => {
          if (typeof value === 'object' && value !== null) {
              if (seen.has(value)) {
                  return '[Circular]';
              }
              seen.add(value);
          }
          return value;
      }, 2);
  };

  req.log = (message) => {
      const messageString = stringifySafe(message); // Convert message to a JSON string
      res.send(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Hello, World!</title>
              <style>
                #editor {
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  right: 0;
                  left: 0;
                  border: 1px solid #ddd;
                }
              </style>
            </head>
            <body>
              <div id="editor"></div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/monaco-editor/min/vs/loader.js"></script>
            <script>
              var dynamicContent = ${JSON.stringify(messageString)}; // Embed the JSON string
              
              require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor/min/vs' } });

              require(['vs/editor/editor.main'], function() {
                monaco.editor.create(document.getElementById('editor'), {
                  value: dynamicContent,
                  language: 'javascript',
                  theme: 'vs-dark'
                });
              });
            </script>
            <script>
              console.log(${messageString}); // Log the message data
            </script>
          </html>
      `);
  };
  next();
}

export default log;