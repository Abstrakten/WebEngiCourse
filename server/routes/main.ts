import { Router, Request, Response, NextFunction } from "express";

const mainRouter: Router = Router();
var counter = 0;

var apiKey = 'GUfecC9FtcRV24UaIFUdV3jZnXUjkSMOkCDAIGEp3GHPDnrJEA';

// Authenticate via OAuth
var tumblr = require('tumblr.js');
var client = tumblr.createClient({'credentials': {
    consumer_key: 'GUfecC9FtcRV24UaIFUdV3jZnXUjkSMOkCDAIGEp3GHPDnrJEA',
    consumer_secret: 'F8AjTRAQvxmiB5hmi1XoSvuQs1W0vNT4iq65YtMdmblN1Pe3kd',
    token: 's0W9SslyMDCe3UZvcsXqPRCYP0BMrpxLHdMe5Dq1Fa5rOdTYpJ',
    token_secret: '40DuCivpQM15FSJEKBpK716FdrEE0PakfL1EtWk9dbmoTQ8G4f',
    },
    returnPromises: true
});

client.returnPromises();

mainRouter.get("/tumblr", function(req, res, next) {

    let test = client.blogPosts("heck-yeah-old-tech");
    test.then((data) => {


        res.json(data.posts.filter((x) => (x.type == "photo" )  ));
    })
    
});



mainRouter.get("/assets/js/vendor/*.map", function (request: Request, response: Response, next: NextFunction) {
    let err = new Error("Not Found");
    next(err);
});

mainRouter.get("/downloads", function(req, res, next) {
	res.json({ test:"pis" });
})

mainRouter.post("/counter", function(req, res, next ) {

	counter = counter +1;
	res.json({data:counter})
})


mainRouter.get("/pis.xml", function(req, res, next) {
    var xml = require('xml');
    var basex  = require("basex");
    var client = new basex.Session("127.0.0.1", 1984, "admin", "admin");
    basex.debug_mode = false;

    let query = `let $courses := doc("/home/zander/WebEngiCourse/public/reed.xml")/root/course[reg_num>100]
    return <html>
    <body>
    <ul>
    {
        for $x in $courses
        where $x/reg_num>10000
        return <li> { data($x/title) } </li>
    }
    </ul>
    </body>
    </html>
    `;

    client.execute('xquery ' + query, function(err, rep) { 
        if(err) { 
            next(err);
        }
        else { 
            res.set('Content-Type', 'text/html');
            res.send(rep.result);
        }
    });

})



export { mainRouter }
