const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    
    class Book extends Model {
        
        static associate() {

        }
    }

    Book.init({
        ISBN: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount_available: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(2,1),
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Book',
        tableName: 'books',
        timestamps: false
    })
    return Book
}