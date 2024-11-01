

import db from '../models/index'
let getHomePage = async(req, res) => {
    
    try{
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        });  
    }catch(e) {
        console.log(e)
    }

     // đã khai báo dịa chỉ ở phần viewEngine nên không cần đường dẫn cụ thể
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
