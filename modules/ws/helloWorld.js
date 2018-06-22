function helloWorld(req, res) {
    // var orders = pjs.query('select * from orders');
    res.json({msg: "hello world"});
}

exports.run = helloWorld;