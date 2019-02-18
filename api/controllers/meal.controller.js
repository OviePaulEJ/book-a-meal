import MealService from '../services/meal.service';

const MealController = {
    fetchAllMeals(req, res) {
        const allMeals = MealService.fetchAllMeals();
        return res.json({
            status: 'success',
            data: allMeals
        }).status(200);
    },
    addAMeal(req, res) {
        const newMeal = req.body;
        console.log(req);
        const createdMeal = MealService.addMeal(newMeal);
        return res.json({
            status: 'success',
            data: createdMeal
        }).status(200);
    },
    getSingleMeal(req, res) {
        const id = req.params.id;
        const foundMeal = MealService.getAMeal(id);
        return res.json({
            status: 'success',
            data: foundMeal
        }).status(201);
    }
};

export default MealController;