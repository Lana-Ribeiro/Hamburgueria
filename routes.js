import { BrowserRouter,
     Router,
    Routes,
    Route}
    from "react-router-dom";
//


import Home from './Home';
import Cadastro from './Cadastro';
import Cardapio from "./Cardapio";
import SobreNos from "./SobreNos";
import Erro from "./Erro";
import Header from "./components/Header";

//criar componente de roteamento
function RouterApp(){

return(
    
<BrowserRouter>
<Header/>



<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cadastro" element={<Cadastro/>}/>
    <Route path="/cardapio" element={<Cardapio/>}/>
    <Route path="/sobrenos" element={<SobreNos/>}/>
    <Route path="*" element={<Erro/>}/>


</Routes>



</BrowserRouter>
)
}
export default RouterApp;
