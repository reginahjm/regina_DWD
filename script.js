var connect = require('connect');
var fs = require('fs');

fs.readFile('./public/pg1.html', function(err, data){
    
	//console.log("Here");
     if(err) 
     	throw err;
	

var app = connect()
	.use(connect.bodyParser())
	.use(connect.static('public'))



	
	
	.use(function (req, res) {
		if (req.url == '/process'){
			
			res.writeHead(200,{'Content-Type':'text/html'})
			res.write(req.body.FirstName + '! name your collection room');
			res.write('<style> img {display:block;}</style>');
			res.write("&nbsp");
			res.write('<img src="http://thehomepicz.com/wp-content/uploads/2014/02/empty-Room.jpg" width="500">');
			res.write('<style> img {display:block;}</style>');
			res.write("&nbsp");
			res.write('<label for="RoomName">Room Name: </label><input type="text" name="RoomName" value="" id="RoomName">')

			//res.writeHead(200,{'Content-Type':'text/html'})
			//res.write(req.body.FirstName + '! name your collection room');
			res.end();
		}else {res.end("invalid Request");
	}


	})
	.listen(3000);

	});
