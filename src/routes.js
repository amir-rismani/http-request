import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddComment from "./pages/AddComment/AddComment";
import ShowComment from "./pages/ShowComment/ShowDetails";

const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-comment" element={<AddComment />} />
            <Route path="/show-comment/:id" element={<ShowComment />} />
        </Routes>
    );
}
export default WebRoutes;