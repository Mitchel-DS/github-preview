import './style.scss'

try {
  const a = 1 + 2
  console.log(a)
} catch (e) {
  console.log(e.status)
}

console.log('Hello World');

document.querySelector('#app').innerHTML = `
  <h1>Hello.</h1>
`
