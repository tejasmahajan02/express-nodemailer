const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, `src/modules/mail/templates`);
const dest = path.resolve(__dirname, `dist/modules/mail/templates`);

fs.mkdirSync(dest, { recursive: true });
fs.cpSync(src, dest, { recursive: true });
