/**
 * Created by yester on 15/3/25.
 */


var express = require('express');
var app = express();


app.get('/hello.txt', function(req,res){


        $http.get('http://localhost:3000/list').success(function(data) {
            $scope.videos = data;
        });


        //var sqlite3 = require('sqlite3');
        //sqlite3.verbose();
        //
        //var db = new sqlite3.Database('db/videos.db');
        //
        //var output = "";
        //db.all("select id, name from tb_videos", function(err, rows){
        //
        //    rows.forEach(function(row){
        //        output += row.id +":"+row.name;
        //
        //
        //
        //    });
        //
        //    res.send('Hello World'+output);
        //});
        //
        //db.close();



    }
);


app.get('/list', function(req,res){

        var sqlite3 = require('sqlite3');
        sqlite3.verbose();

        var db = new sqlite3.Database('db/venus');


        var listJSON ={};
        var i = 0;
        db.all("select video_id, video_code, video_title, video_released, video_cover_l, video_cover_s from vn_videos", function(err, rows){

            rows.forEach(function(row){

                var itemJSON = {};
                itemJSON.video_id= row.video_id;
                itemJSON.video_code = row.video_code;
                itemJSON.video_title = row.video_title;
                itemJSON.video_released = row.video_released;
                itemJSON.video_cover_l = row.video_cover_l;
                itemJSON.video_cover_s = row.video_cover_s;
                listJSON[i]= itemJSON;
                i++;
            });

            //res.send('list:'+output);

            res.set('Access-Control-Allow-Origin','*');
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
