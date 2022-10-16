import React, {useEffect, useState} from "react";
import {Button, Table} from 'rsuite';
import api from '../hoc/api'
import EditableCell from "./EditableCell";
import ActionCell from "./ActionCell";

const { Column, HeaderCell, Cell } = Table;


const DataTable = ({setOpen, setSelected, setAllData}) => {
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = useState([])
    useEffect( () => {
        setLoading(true)
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(response=> {
                console.log('response', response)
                const normalize = response.map(country=>{
                    let countryObj = {...country}
                    countryObj.name=countryObj.name.official
                    countryObj.timezones = countryObj.timezones[0]
                    countryObj.capital = Array.isArray(countryObj.capital) ? countryObj.capital[0] : null
                    countryObj.id = countryObj.cca2
                    return countryObj
                })
                setData(normalize)
                setAllData(normalize)
                setTimeout(() => {
                    setLoading(false)
                },500)
            })
    },[])

    const getData = () => {
        if (sortColumn && sortType) {
            return data.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }
        return data;
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };
    const handleChange = (id, key, value) => {
        const nextData = Object.assign([], data);
        nextData.find(item => item.id === id)[key] = value;
        setData(nextData);
    };
    const handleEditState = id => {
        const nextData = Object.assign([], data);
        const activeItem = nextData.find(item => item.id === id);
        activeItem.status = activeItem.status ? null : 'EDIT';
        setData(nextData);
    };
    return(
        <Table
            height={500}
            data={getData()}
            sortColumn={sortColumn}
            sortType={sortType}
            onSortColumn={handleSortColumn}
            loading={loading}
            style={{paddingRight:'50px', paddingLeft:'50px'}}
        >
            <Column fixed='left' flexGrow={1}>
                <HeaderCell>...</HeaderCell>
                <Cell>
                    {
                        rowData => <Button onClick={()=>{
                            setOpen(true)
                            setSelected(rowData)
                        }} appearance='link'>Detail</Button>
                    }
                </Cell>
            </Column>

            <Column resizable width={100}>
                <HeaderCell>Flag</HeaderCell>
                <Cell>
                    {rowData => <img width={50} height={25} src={rowData.flags.png} alt=""/>
                    }
                </Cell>
            </Column>
            <Column resizable width={100} align="center" fixed sortable>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
            </Column>

            <Column resizable width={200} fixed sortable>
                <HeaderCell>Name</HeaderCell>
                <EditableCell dataKey="name" onChange={handleChange} />
            </Column>

            <Column resizable width={100} sortable>
                <HeaderCell>Region</HeaderCell>
                <EditableCell dataKey="region" onChange={handleChange} />
            </Column>

            <Column resizable sortable width={100} >
                <HeaderCell>Population</HeaderCell>
                <EditableCell dataKey="population" onChange={handleChange} />
            </Column>
            <Column resizable width={100}>
                <HeaderCell>Time zone</HeaderCell>
                <EditableCell dataKey="timezones" onChange={handleChange} />
            </Column>

            <Column fixed='right' flexGrow={2}>
                <HeaderCell>...</HeaderCell>
                <ActionCell dataKey="id" onClick={handleEditState} />
            </Column>
        </Table>
    )
}
export default DataTable
