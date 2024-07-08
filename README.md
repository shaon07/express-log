

```markdown
# express-log

A middleware function for Express.js that mimics Laravel's `dd()` function. This package helps you log and inspect variables easily during development.

## Features

- Simple and easy-to-use middleware.
- Mimics Laravel's `dd()` function for debugging.
- Outputs JSON and console logs.
```

## If using Testing app like POSTMAN, 
then set the following settings
```bash 
pm.visualizer.set(pm.response.text());
```

![normal](https://img001.prntscr.com/file/img001/SKy5tcSUQ9Cvofb2ya8lfA.png)

## Installation

Install the package using npm:

```bash 
npm install express-log
```

## Usage

### Normal Console Logging

Typically, you might log variables in an Express.js application like this:

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const user = [
    { name: "John Doe", age: 30 },
    { name: "Jane Doe", age: 25 },
    { name: "Bob Smith", age: 28 },
  ]
  console.log(user); // Logs the user object to the console
  res.send('Check your console for logged variables!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

![normal](https://img001.prntscr.com/file/img001/fBtR-ryLQ7qUvgrWekXGTg.png)

### Using `express-log`

To use `express-log` in your Express.js application, follow these steps:

1. Import the package and use it as middleware:

```javascript
const express = require('express');
const log = require('express-log');

const app = express();

// Use express-log middleware
app.use(log);

// Your routes here
app.get('/', (req, res) => {
  const user = [
    { name: "John Doe", age: 30 },
    { name: "Jane Doe", age: 25 },
    { name: "Bob Smith", age: 28 },
  ]
  req.log(user); // Uses express-log to log the user data
  res.send('Check your console for logged variables!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

![normal](https://img001.prntscr.com/file/img001/BDjFz6ADRmqbXv0g1UPZpg.png)

2. The `express-log` middleware will log variables to the console when a request is made.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/shaon07/express-log/issues).

## Links

- [GitHub Repository](https://github.com/shaon07/express-log)
- [npm Package](https://www.npmjs.com/package/express-log)