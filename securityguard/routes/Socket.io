server.listen(4000)
// socket io
io.on('connection', function (socket) {
    socket.on('newdata', function (data) {
        io.emit('new-data', { data: data });
    });
    socket.on('updatedata', function (data) {
      io.emit('update-data', { data: data });
    });
});
// list data
router.get('/', function(req, res) {
    Sales.find(function (err, sales) {
        if (err) return next(err);
        res.json(sales);
    });
});

// item sales report
router.get('/itemsales',  function(req, res, next) {
    Sales.aggregate([
        {
            $group: { 
                _id: { GuardId: '$GuardId', GuardName: '$GuardName' }, 
                totalPrice: {
                    $sum: '$Amount'
                }
            }
        },
        { $sort: {totalPrice: 1} }
    ], function (err, sales) {
        if (err) return next(err);
        res.json(sales);
    });
});


// get data by id
router.get('/:id', function(req, res, next) {
    Sales.findById(req.params.id, function (err, sales) {
        if (err) return next(err);
        res.json(sales);
    });
});
  
// post data
router.post('/', function(req, res, next) {
    Sales.create(req.body, function (err, sales) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(sales);
    });
});
  
// put data
router.put('/:id', function(req, res, next) {
    Sales.findByIdAndUpdate(req.params.id, req.body, function (err, sales) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(sales);
    });
});
  
// delete data by id
router.delete('/:id', function(req, res, next) {
    Sales.findByIdAndRemove(req.params.id, req.body, function (err, sales) {
        if (err) return next(err);
        res.json(sales);
    });
});