import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Search } from "./components/Search";
import { Profile } from "./components/Profile";
import { Trending } from "./components/Trending";
import { Account } from "./components/Account";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/trending',
    element: <Trending />
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
