
let getHomePage = (req, res) => {
    return res.render('homepage.ejs')    // đã khai báo dịa chỉ ở phần viewEngine nên không cần đường dẫn cụ thể
}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}

/*object:{
    key: '',
    value: ''
    }
*/
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}
