import { HomeView, LogInView, SignUpView, PantryView } from "../views";

const routes = {
  logIn: {
    name: "logIn",
    pathName: "/log-in",
    privateRoute: false,
    view: LogInView,
  },
  signUp: {
    name: "signup",
    pathName: "/sign-up",
    privateRoute: false,
    view: SignUpView,
  },
  home: {
    name: "home",
    pathName: "/",
    privateRoute: true,
    view: HomeView,
  },
  pantry: {
    name: "pantry",
    pathName: "/pantry",
    privateRoute: true,
    view: PantryView,
  },
  // {
  //   name: "recipes",
  //   pathName: "/recipes",
  //   view: () => <RecipesView
  // },
};

export default routes;
