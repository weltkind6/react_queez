import './App.css';
import {Container} from 'reactstrap';
import AllRoutes from "./AllRoutes/AllRoutes";

function App() {
    return (
        <div className='wrapper'>
            <Container>
                <AllRoutes />
            </Container>
        </div>
    );
}

export default App;
