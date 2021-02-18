import clothesRoutes from "./clothes/routes";
import usersRoutes from './users/routes';
import cartRoutes from './carts/routes';

export default [...clothesRoutes, ...usersRoutes, ...cartRoutes];
