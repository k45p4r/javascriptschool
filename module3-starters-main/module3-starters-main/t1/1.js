'use strict';

let target = document.querySelector('#target')
const html = `
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
`;
target.innerHTML = html;
target.classList.add('my-list');

