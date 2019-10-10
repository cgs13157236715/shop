
const http = require('http');
const mysql= require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'shop'
});
connection.connect();
http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin',"*");
   connection.query('select * from goods limit 0,9', function (error, results, fields) {
        if (error) throw error;
      //   if (error) throw er;
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify({
            meta: {
                msg: '操作成功',
                status: 200
            },
            data: results
        }))
    });
}).listen(3010)




