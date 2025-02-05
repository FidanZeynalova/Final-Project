import UserAccount from "../pages/client/userAccount/UserAccount";
import UserDishDetail from "../pages/client/userDishDetail/UserDishDetail";
import UserDrinkRecipes from "../pages/client/userDrinkRecipes/UserDrinkRecipes";
import UserFavorites from "../pages/client/userFavorites/UserFavorites";
import UserHealthierRecipes from "../pages/client/userHealthierRecipes/UserHealthierRecipes";
import UserLogin from "../pages/client/userLogin/UserLogin";
import UserRecipes from "../pages/client/userRecipes/userRecipes";
import UserRoot from "../pages/client/UserRoot";
import UserSubcribe from "../pages/client/userSubscribe/UserSubcribe";
import UserNotFound from "../pages/client/userNotFound/UserNotFound";
import UserMain from "../pages/client/userMain/UserMain";
import AdminRoot from "../pages/admin/AdminRoot";
import AdminDashboard from "../pages/admin/adminDashboard/AdminDashboard";
import AdminRecipes from "../pages/admin/adminRecipes/AdminRecipes";
import AdminUser from "../pages/admin/adminUsers/AdminUser";
import UserRecipeCollections from "../pages/client/userRecipeCollections/UserRecipeCollections";
import UserTacosRecipes from "../pages/client/userTacosRecipes/UserTacosRecipes";
import UserCookBook from "../pages/client/UserCookBook/UserCookBook";
import AdminLogin from "../pages/admin/adminLogin/adminLogin";
import AdminLoginRoot from "../pages/admin/AdminLoginRoot";
import AdminPrivacyPolicy from "../pages/admin/adminPrivacyPolicy/AdminPrivacyPolicy";





export const ROUTES = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "/",
                element: <UserMain />
            },
            {
                path: "/:id",
                element: <UserDishDetail />
            },
            {
                path: "/recipes",
                element: <UserRecipes />
            },
            {
                path: "/register",
                element: <UserAccount />
            },
            {
                path: "/drinkRecipes",
                element: <UserDrinkRecipes />
            },
            {
                path: "/healthierRecipes",
                element: <UserHealthierRecipes />
            },
            {
                path: "/tacosRecipes",
                element: <UserTacosRecipes />
            },
            {
                path: "/login",
                element: <UserLogin />
            },
            {
                path: "/subscribe",
                element: <UserSubcribe />
            },
            {
                path: "/favorites",
                element: <UserFavorites />
            },
            {
                path: "/recipeCollections",
                element: <UserRecipeCollections />
            },
            {
                path: "/cookbook",
                element: <UserCookBook />
            },
            {
                path: "/privacy",
                element: <AdminPrivacyPolicy />
            },
            {
                path: "*",
                element: <UserNotFound />
            }
        ]
    },
    {
        path: "/admin/login",
        element: <AdminRoot/>,
        children: [
            {
                path: "dashboard",
                element: <AdminDashboard />
            },
            {
                path: "recipes",
                element: <AdminRecipes />
            },
            {
                path: "users",
                element: <AdminUser />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLoginRoot />,
        children:[
            {
                path:"",
                element:<AdminLogin/>
            }
        ]
    }
    
]