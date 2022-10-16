import React from "react"
import {Drawer, FlexboxGrid, List} from 'rsuite'
import GoogleMapReact from 'google-map-react'

const Detail =({open, setOpen, selected}) => {
    const defaultProps = {
        center: {
            lat: Array.isArray(selected?.capitalInfo?.latlng) ? selected?.capitalInfo.latlng[0] : 10.99835602,
            lng: Array.isArray(selected?.capitalInfo?.latlng) ? selected?.capitalInfo.latlng[1] : 77.01502627
        },
        zoom: 11
    };
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };
    return (

            <Drawer placement='left' open={open} onClose={() => setOpen(false)}>
                <Drawer.Header>
                    <Drawer.Title><p>{selected.name}</p> <img width={100} height={50} src={selected?.flags?.png} alt=""/></Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <List className='country-list'>
                        <List.Item>
                            <FlexboxGrid>
                                <FlexboxGrid.Item colspan={6}>Country Code: </FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={18}>{selected.id}</FlexboxGrid.Item>
                            </FlexboxGrid>
                        </List.Item>
                        <List.Item>
                            <FlexboxGrid>
                                <FlexboxGrid.Item colspan={6}>Region: </FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={18}>{selected.region}</FlexboxGrid.Item>
                            </FlexboxGrid>
                        </List.Item>
                        <List.Item>
                            <FlexboxGrid>
                                <FlexboxGrid.Item colspan={6}>Population: </FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={18}>{selected.population}</FlexboxGrid.Item>
                            </FlexboxGrid>
                        </List.Item>
                        <List.Item>
                            <FlexboxGrid>
                                <FlexboxGrid.Item colspan={6}>Time zone: </FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={18}>{selected.timezones}</FlexboxGrid.Item>
                            </FlexboxGrid>
                        </List.Item>
                    </List>
                    <div style={{ height: '50vh', width: '100%', paddingBottom:'10vh' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key:'AIzaSyCUwJ6_0xnU3vUopKg_1TTpC-5h6ghbP9Y' }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                        >
                        </GoogleMapReact>
                    </div>
                </Drawer.Body>
            </Drawer>
    );
}
export default Detail
