const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream("sample.csv")
.pipe(csv())
.on('data', function(data){
    console.log(data.id);
    console.log(data.name);
});
