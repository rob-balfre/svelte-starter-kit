const tape = require('tape');

const source = require('./Header.html');
window.Header = source.default;

const clearBrowser = () => {
  document.write(`
	<html>
		<head>
			<title>Testing yo</title>
		</head>
		<body>
		</body>
	</html>
	`);
  document.close()
};

const test = (description, fn) => tape(description, t => {
  clearBrowser();
  try {
    fn(t)
  } catch (e) {
    t.error(e);
    t.end()
  }
});

test(`Header should load h1 text correctly`, t => {
  t.timeoutAfter(1000);
  t.plan(1);

  new Header({
    target: document.querySelector('body')
  });

  const headerText = document.querySelector('h1').innerText;
  t.equal(headerText, `Hello Derek, counted to 0 already!`);
  t.end();
});