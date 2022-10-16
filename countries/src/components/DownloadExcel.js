import React from "react";
import * as XLSX from 'xlsx'
import {Button} from "rsuite";
const json = [];
const downloadxls = (e, data) => {
    data.map(country => {
        json.push(
            {
                name:country.name,
                countryCode:country.id,
                region:country.region,
                population:country.population,
                timezone:country.timezones
            }
        )
    })
    console.log(json);
    e.preventDefault();
    const ws = XLSX.utils.json_to_sheet(json);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
    /* generate XLSX file and send to client */
    XLSX.writeFile(wb, "countryList.xlsx");
};


const DownloadExcel =({data}) => {

    return(
        <Button
            style={{color:'#34c3ff'}}
            onClick={(e) => {
                downloadxls(e, data);
            }}
        >
            Download xlsx
        </Button>
    )
}
export default DownloadExcel
