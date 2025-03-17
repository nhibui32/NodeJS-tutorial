const getHomepage =(req, res)=>{
    res.send("Hello world with nodejs and nodemon")
}

const getABC = (req, res)=>{

    // process data. 
    //call model 
    console.log('Accessing /abc route Anh Nhi');
    res.render('sample.ejs')
}
const hoidanit =(req, res)=>{
    res.send('<h1>check AB</h1>')
}
module.exports = {
    getHomepage,
    getABC,
    hoidanit
}