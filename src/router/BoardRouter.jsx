import { Route, Routes } from "react-router-dom"
import List from "../pages/board/list"

export const BoardRouter = () => {
    return (
        <Routes>
            <Route path='/list' element={<List></List>}></Route>
        </Routes>
    )
}