
//set local variables middleware
app.use(function (req,res,next) {
    // req.user = {
    //  '_id':'6011d61a04abe04708edfb5f',
    //  'username':'bob'
    // }
    // req.user = User.findOne({username: 'bob'});
    req.user = User.authenticate()('bob','password');
    console.log(req.user);
    res.locals.currentUser = req.user;
    //set success flash message
    res.locals.success = req.session.success || "";
    //delete flash message after sending it to the page so it doesn't show again
    delete req.session.success;
    //set error flash message
    res.locals.error = req.session.error || "";
    //delete flash message after sending it to the page so it doesn't show again
    delete req.session.error;
    //continue on to the next function in the middlware/route chain
    next();
})