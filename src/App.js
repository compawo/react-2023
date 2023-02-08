import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AlbumsPage, CommentsPage, HomePage, TodosPage} from "./pages";
import {CommentsDetailsPage} from "./pages/CommentsDetailsPage/";
import {MainLayout} from "./layouts";


const App = () => {
  return (
      <div>
          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<HomePage/>}/>
                  <Route path={'albums'} element={<AlbumsPage/>}/>
                  <Route path={'todos'} element={<TodosPage/>}/>
                  <Route path={'comments'} element={<CommentsPage/>}>
                  <Route path={'comments/:postId'} element={<CommentsDetailsPage/>}/>

                  </Route>


              </Route>
          </Routes>
      </div>
  );
};

export {App};
