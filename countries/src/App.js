import React,{useState} from "react";
import {Grid, Row, Col, Header, FlexboxGrid, ButtonToolbar, Button} from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import DataTable from "./components/DataTable";
import Detail from './components/Detail'
import Downloader from "./components/Downloader";
import './App.css';

function App() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState({})
    const [allData, setAllData] = useState({})
  return (
    <div className="App">
        <Grid fluid>
            <Row>
                <Detail open={open} setOpen={setOpen} selected={selected}/>
                <Col xs={24}>
                    <Header>
                        <FlexboxGrid>
                            <FlexboxGrid.Item colspan={24}><h1>COUNTRY LIST</h1></FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={24}>
                              <Downloader data={allData}/>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </Header>
                </Col>
                <Col xs={24}>
                    <DataTable setOpen={setOpen} setSelected={setSelected} setAllData={setAllData}/>
                </Col>
            </Row>
        </Grid>
    </div>
  );
}

export default App;
