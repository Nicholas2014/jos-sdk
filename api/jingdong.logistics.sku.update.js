/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.logistics.sku.update',
    authorization:true,
    check:{
        goods_no:{
            type:'String',
            required:true
        },
        bar_code:{
            type:'String',
            required:false
        },
        sku_id:{
            type:'String',
            required:false
        },
        name:{
            type:'String',
            required:false
        },
        goods_abbreviation:{
            type:'String',
            required:false
        },
        category_id:{
            type:'String',
            required:false
        },
        category_name:{
            type:'String',
            required:false
        },
        brand_no:{
            type:'String',
            required:false
        },
        brand_name:{
            type:'String',
            required:false
        },
        format:{
            type:'String',
            required:false
        },
        color:{
            type:'String',
            required:false
        },
        size:{
            type:'String',
            required:false
        },
        gross_weight:{
            type:'Number',
            required:false
        },
        net_weight:{
            type:'Number',
            required:false
        },
        size_definition:{
            type:'String',
            required:false
        },
        suppliers_name:{
            type:'String',
            required:false
        },
        manufacturer:{
            type:'String',
            required:false
        },
        suppliers_no:{
            type:'String',
            required:false
        },
        product_area:{
            type:'String',
            required:false
        },
        length:{
            type:'Number',
            required:false
        },
        width:{
            type:'Number',
            required:false
        },
        height:{
            type:'Number',
            required:false
        },
        volume:{
            type:'Number',
            required:false
        },
        is_safe:{
            type:'Number',
            required:false
        },
        safe_date:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;