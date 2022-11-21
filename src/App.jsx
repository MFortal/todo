import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ModalCreate from "./pages/Modal/Create/Create";
import ModalEdit from "./pages/Modal/Edit/Edit";
import ModalDelete from "./pages/Modal/Delete/Delete";
import ModalView from "./pages/Modal/View/View";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Todo/" element={<MainPage />}>
            <Route path="create" element={<ModalCreate />}></Route>
            <Route path="view/:cardId" element={<ModalView />}></Route>
            <Route path="delete/:cardId" element={<ModalDelete />}></Route>
            <Route path="edit/:cardId" element={<ModalEdit />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
