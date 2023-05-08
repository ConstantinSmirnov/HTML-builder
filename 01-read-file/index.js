const fs = require('fs');
const dirname = './01-read-file';

fs.readFile(dirname + '/text.txt', 'utf-8', (error, data) => {
  if (error)
    throw error;

  console.log(data);
});
