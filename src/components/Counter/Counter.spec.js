const tape = require('tape');

const source = require('./Counter.html');
window.Counter = source.default;

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

test(`Clicking increment button in Counter component`, t => {
  t.timeoutAfter(1000);
  t.plan(1);

  const component = new Counter({
    target: document.querySelector('body')
  });

  document.getElementById('increment').click();
  const count = component.get('count');
  t.equal(count, 1);
  t.end();
});

test(`Clicking decrement button in Counter component`, t => {
  t.timeoutAfter(1000);
  t.plan(1);

  const component = new Counter({
    target: document.querySelector('body')
  });

  document.getElementById('decrement').click();
  const count = component.get('count');
  t.equal(count, 0);
  t.end();
});