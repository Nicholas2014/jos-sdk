/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.logistics.returnorder.cancel',
    authorization:true,
    check:{
        receipt_no:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;