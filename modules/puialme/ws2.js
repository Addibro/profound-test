function getorder(req, res) {
    var orderId = req.params.id;
    res.json({orderId: orderId});
}

exports.run = getorder;