import './App.css';
import {Route, Routes} from "react-router-dom";
import EmployeeViewerComponent from "./components/EmployeeViewer/EmployeeViewer.component";
import EmployeeFormComponent from "./components/EmployeeForm/EmployeeForm.component";
import EmployeeDetailsComponent from "./components/EmployeeDetails/EmployeeDetails.component";
import {Container} from "react-bootstrap";

function App() {
    return (
        <Container>
            <div className="App">
                <Routes>
                    <Route index element={<EmployeeViewerComponent/>}/>
                    <Route path='/add' element={<EmployeeFormComponent/>}/>
                    <Route path='/employee/:id' element={<EmployeeDetailsComponent/>}/>
                </Routes>
            </div>
        </Container>
    );
}

export default App;
