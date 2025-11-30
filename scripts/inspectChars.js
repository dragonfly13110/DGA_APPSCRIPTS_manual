const fs = require('fs');
const path = require('path');

function inspect(filePath, lineNum, colStart, colEnd) {
  const data = fs.readFileSync(filePath);
  console.log(`File: ${filePath}`);
  // try to decode as utf8, and show hex bytes
  const utf8 = data.toString('utf8');
  const lines = utf8.split(/\r?\n/);
  if (lineNum > lines.length) {
    console.error('line number out of range');
    return;
  }
  const line = lines[lineNum - 1];
  const snippet = line.slice(Math.max(0, colStart - 10), colEnd + 10);
  console.log('utf8 line:', line);
  console.log('snippet:', snippet);
  for (let i = Math.max(0, colStart - 10); i < Math.min(line.length, colEnd + 10); i++) {
    const ch = line[i];
    console.log(i + 1, ch, 'codepoint:', ch.codePointAt(0), 'hex:', ch.codePointAt(0).toString(16));
  }
  // show raw bytes of the whole file around approximate offset
  const linesUpTo = lines.slice(0, lineNum - 1).join('\n');
  const offset = Buffer.from(linesUpTo + '\n').length + colStart - 1;
  const rawBytes = data.slice(Math.max(0, offset - 20), offset + 20);
  console.log('raw bytes near offset:', rawBytes.toJSON().data.map(b => b.toString(16).padStart(2,'0')).join(' '));
}

// quick checks
inspect(path.resolve(__dirname, '../pages/LookerSetup.tsx'), 87, 190, 230);
inspect(path.resolve(__dirname, '../pages/Troubleshooting.tsx'), 66, 80, 140);
inspect(path.resolve(__dirname, '../pages/Troubleshooting.tsx'), 99, 150, 180);
