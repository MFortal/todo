import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Todo/" element={<MainPage />}>
            {/* <Route path="create" element={<ModalCreate />}></Route>
            <Route path="view/:cardId" element={<ModalView />}></Route>
            <Route path="edit/:cardId" element={<ModalEdit />}></Route>
            <Route path="delete/:cardId" element={<ModalDelete />}></Route> */}
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
