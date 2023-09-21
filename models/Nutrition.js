const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Nutrition extends Model {}

Nutrition.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		food_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		calorie_count_per_serving: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		calorie_count_servings: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		meal_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
	},
	{
		sequelize,
		modelName: "nutrition",
		timestamps: true,
		underscored: true,
	}
);

module.exports = Nutrition;