var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  var http = require('http');
  var cheerio = require('cheerio');

    var options ={
        url: 'http://www.baidu.com',
        method:'GET',
        headers:{
            'User-Agent':'Mozilla/3.0 (compatible)'
        }

    };
  http.get('http://www.baidu.com', function(res){

        var chunks = [],
            size = 0;

        res.on("data", function(chunk) {
              chunks.push(chunk);
              size += chunk.length;
        });

        res.on("end", function(){
          var data = Buffer.concat(chunks, size);
          var html = data.toString();
          var $ = cheerio.load(html);
        });


      }).on('error', function(e) {
          console.log("Got error:" + e.message);
  });



  res.render('index', { title: 'Express' });
});

module.exports = router;
