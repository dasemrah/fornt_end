import React, {useEffect, useState} from "react";
import { CSVLink, CSVDownload } from "react-csv";
import {Button} from "rsuite";

const DownloadCSV =({data}) => {
    const [csvData, setCsvData] = useState([["name", "Country Code", "Region", "Population", "Time zone"]])
    useEffect(() => {
        if(data.length>0){
            data.map(country => {
                setCsvData(oldState => [...oldState, [country.name, country.id, country.region, country.population, country.timezones]])
            })
        }
    },[data])
    return(
        <Button>
            <CSVLink filename={"countryList.csv"} data={csvData}>Download CSV</CSVLink>
        </Button>
    )
}
export default DownloadCSV
