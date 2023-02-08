import {urls} from "./configs";
import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, HomePage, PostByCommentPage, TodosPage} from "./pages";
import {Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={urls.index} element={<MainLayout/>}>
                    <Route path={urls.index} index element={<HomePage/>}/>
                    <Route path={urls.todos} element={<TodosPage/>}/>
                    <Route path={urls.albums} element={<AlbumsPage/>}/>
                    <Route path={urls.comments} element={<CommentsPage/>}>
                        <Route path={urls.postId} element={<PostByCommentPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export {App};