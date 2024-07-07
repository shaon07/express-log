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
      res.setHeader("Content-Type", "text/html");
      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <script src="https://pfau-software.de/json-viewer/dist/iife/index.js"></script>
         
        </head>
        <body>
          <andypf-json-viewer theme="darcula" >${messageString}</andypf-json-viewer>          
          <script>
            console.log(${messageString});
          </script>
        </body>
      </html>
      `);
  };
  next();
}

export default log;