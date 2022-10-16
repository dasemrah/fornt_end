import React, {useEffect, useState} from "react";
import {Button, ButtonToolbar} from "rsuite";
import DownloadCSV from "./DownloadCSV";
import DownloadPDF from "./DownloadPDF";
import DownloadExcel from "./DownloadExcel";


const Downloader =({data}) => {

    return(
        <ButtonToolbar style={{padding:'15px'}}>
            <DownloadCSV data={data}/>
            <DownloadPDF data={data}/>
            <DownloadExcel data={data}/>

        </ButtonToolbar>
    )
}
export default Downloader
