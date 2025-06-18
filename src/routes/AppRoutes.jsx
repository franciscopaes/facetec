import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Geral } from '../pages/Geral/Geral';
import { Classe } from '../pages/Classe/Classe';
import { Alunos } from '../pages/Alunos/Alunos'
import { Inicial } from "../pages/Inicial/Inicial";
import { Mn } from "../pages/Mn/Mn";
import { Adm } from "../pages/Adm/Adm";
import { Ds } from "../pages/Ds/Ds";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="inicial" element={<Inicial />} />
                <Route path="classe" element={<Classe />} />
                <Route path="geral" element={<Geral />} />
                <Route path="alunos" element={<Alunos />} />
                <Route path="mn" element={<Mn />} />
                <Route path="adm" element={<Adm />} />
                <Route path="ds" element={<Ds />} />
            </Routes>
        </BrowserRouter>
    );
}
