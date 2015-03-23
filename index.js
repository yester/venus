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






/**
 * Created by Yester on 3/19/2015.
 */

var express = require('express');
var app = express();


app.get('/hello.txt', function(req,res){

        var sqlite3 = require('sqlite3');
        sqlite3.verbose();

        var db = new sqlite3.Database('db/videos.db');

        var output = "";
        db.all("select id, name from tb_videos", function(err, rows){

            rows.forEach(function(row){
            output += row.id +":"+row.name;



            });

            res.send('Hello World'+output);
        });

        db.close();



    }
);


app.get('/list', function(req,res){

        var sqlite3 = require('sqlite3');
        sqlite3.verbose();

        var db = new sqlite3.Database('db/videos.db');


        var listJSON ={};
        var i = 0;
        db.all("select id, name from tb_videos", function(err, rows){

            rows.forEach(function(row){

                var itemJSON = {};
                itemJSON.id= row.id;
                itemJSON.name = row.name;
                listJSON[i]= itemJSON;
                i++;
            });

            //res.send('list:'+output);

            res.json(listJSON);
            //res.json({ user: 'tobi' })
        });

        db.close();
    }
);

//paging list


//select video data, star data, tag data by video id,

//if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.
// GET /user/tj
//req.params.name
// => "tj"
app.get('/video/:id', function(req,res){

        var sqlite3 = require('sqlite3');
        sqlite3.verbose();

        var db = new sqlite3.Database('db/videos.db');


        var listJSON ={};
        var i = 0;
        var video_id = req.params.id;
        db.all("select id, name from tb_videos where id="+video_id, function(err, rows){

            rows.forEach(function(row){

                var itemJSON = {};
                itemJSON.id= row.id;
                itemJSON.name = row.name;
                listJSON[i]= itemJSON;
                i++;
            });

            //res.send('list:'+output);

            res.json(listJSON);
            //res.json({ user: 'tobi' })
        });

        db.close();
    }
);



// GET /search?q=tobi+ferret
// req.query.q
// => "tobi ferret"

// GET /search?tag=1, it will return videos with tag =1
// req.query.tag ==> 1




var server = app.listen(3000, function(){
 console.log('Listening on port %d', server.address().port);

});



//package.json 
//npm install nodejs
//npm install express
//npm install sqlite3

{
  "name": "application-name",
  "version": "0.0.1",
  "dependencies": {
    "express": "4.12.3"

  }
}
