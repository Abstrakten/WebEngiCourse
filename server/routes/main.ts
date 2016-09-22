import { Router, Request, Response, NextFunction } from "express";

const mainRouter: Router = Router();
var counter = 0;
//error handling for unknown map files.
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
