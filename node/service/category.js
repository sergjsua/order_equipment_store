const { Category, sequelize, MainProduct } = require('../models');
const Seq = require('sequelize');
const { Op } = Seq;

async function getCategoryProducts(ctx) {
    const categoryName = ctx.params.category
    
    let category = await getCategoryByName(categoryName)
    if (!category) {
        ctx.body = { 'error': 'category not found' }
    } else if(ctx.params.subcategory) {
        const subcategory = await getSubCategoryByName(ctx.params.subcategory, category.id)
        if(!subcategory) {
            ctx.body = { 'error': 'category not found' }
        } else {
            const products = await Category.findOne({
                include: [{
                    model: MainProduct,
                    where: {
                        subcategory_id: subcategory.id
                    }
                }]
            })
    
            ctx.body = { 'category': subcategory, 'first_level': products }
        }
    } else {
        const products = await Category.findOne({
            include: [{
                model: MainProduct,
                where: {
                    subcategory_id: category.id
                }
            }]
        })
    
        const secondLevelProducts = await Category.findAll({
            include: [{
                model: MainProduct,
            }],
            where: {
                parent_category_id: category.id
            }
        })

        ctx.body = { 'category': category, 'first_level': products, 'second_level': secondLevelProducts }
    }    
}

async function getCategoryByName (name) {
    return await Category.findOne({
        where: { 
            name: name, 
            parent_category_id: 0 
        }
    })
}

async function getSubCategoryByName (name, parent) {
    return await Category.findOne({
        where: { 
            name: name,
            parent_category_id: parent
        }
    })
}

exports.register = ({router}) => {
    router.get('/category/:category', getCategoryProducts)
    router.get('/category/:category/:subcategory', getCategoryProducts)
}
