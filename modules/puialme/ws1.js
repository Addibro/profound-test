/* 
* REST design principles: 
* - use http methods explicitly
* - be stateless
* - expose directory structure-like URIs
* - transer XML, JSON or both 
*
* 
* Define a web service that serves a json response {msg: "Hello"}
*/
function ws1(req, res) {
    // res.json({msg: req.params.message});
    res.json(req.body);
}

exports.run = ws1; 