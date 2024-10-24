import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import Search from './pages/Search';
import PageNotFound from './pages/PageNotFound';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop.jsx'  // Import ScrollToTop

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieList apiPath = 'movie/now_playing' title = 'Home'/>,
  },
  {
    path:"/movie/:id",
    element: <MovieDetail/>,
  },
  {
    path: "/movies/popular",
    element: <MovieList apiPath = 'movie/popular' title ='Popular Movies Now'/>,
  },
  {
    path: "/movies/top",
    element: <MovieList apiPath = 'movie/top_rated' title ='Top Rated Movies'/>,
  },
  {
    path: "/movies/upcoming",
    element: <MovieList apiPath = 'movie/upcoming' title ='Upcoming Movies'/>,
  },
  {
    path: "/search/movie",
    element: <Search apiPath='search/movie'/>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop /> {/* Use ScrollToTop here inside the RouterProvider */}
      <App />
    </RouterProvider>
  </StrictMode>
)
