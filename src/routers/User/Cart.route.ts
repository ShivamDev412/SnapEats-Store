import express from "express";
import { ENDPOINTS } from "../../utils/Endpoints";
import CartController from "../../controllers/User/Cart.controller";
const cartController = new CartController();
const routes = express.Router();
routes.get(ENDPOINTS.CART, cartController.getCart);
routes.post(ENDPOINTS.CART, cartController.addToCart);
routes.put(ENDPOINTS.CART, cartController.updateCartQuantity);
routes.delete(ENDPOINTS.CART, cartController.removeFromCart);
export default routes;