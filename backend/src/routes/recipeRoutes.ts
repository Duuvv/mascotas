/* backend/src/routes/recipeRoutes.ts

import express from 'express';
import { getRecipes, createRecipe } from '../controllers/recipeController';

const router = express.Router();

router.get('/', getRecipes);      // Endpoint para obtener recetas
router.post('/', createRecipe);   // Endpoint para crear una nueva receta

export default router;
*/