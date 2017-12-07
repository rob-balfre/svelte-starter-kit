export function hello(name) {
  return `Hello ${name}`;
}

export function checkUserActive() {
  return sessionStorage.getItem('signedIn');
}