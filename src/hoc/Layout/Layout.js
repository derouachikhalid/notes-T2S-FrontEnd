import NavBar from "../../components/Navigation/nav-bar/NavBar";
import PageHeader from "../../components/Navigation/page-header/PageHeader";
import Aux from "../auxi/Auxi";

import "./Layout.css"
const Layout = props => (
    <Aux>
        <header>
            <NavBar />
            <PageHeader/>
        </header>
        <main className="MainComponent">
            {props.children}
        </main>
    </Aux>
)

export default Layout;