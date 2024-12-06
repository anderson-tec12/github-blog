import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Post } from '../pages/post';
import { DefaultLayout } from './defaultLayout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}