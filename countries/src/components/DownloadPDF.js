
import ReactPDF, { Page, Text, View, Document, StyleSheet,PDFDownloadLink, Image  } from '@react-pdf/renderer';

import {Button} from "rsuite";


const DownloadPDF =({data}) => {

    const styles = StyleSheet.create({
        page: {
            backgroundColor: "#ffffff",
            color:'black'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        },
        container: {
            backgroundColor: "#f6f6f5",
            display: "flex",
            flexDirection: "row",
            padding: 5
        },
        details: {
            display: "flex",
            marginLeft: 5
        },
        detailsFooter: {
            display: "flex",
            flexDirection: "row"
        },
        title: {
            fontSize: 15,
            marginBottom: 10
        },
        overview: {
            fontSize: 10
        },
        image: {
            height: 200,
            width: 150
        },
        subtitle: {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: 150,
            alignItems: "center",
            marginBottom: 12
        },
        text: {
            fontSize: 10
        },
    });
    // Create Document Component
    const MyDocument = () => (
        <Document>
            {data.length > 0 &&
                data.map(country => (
                    <Page style={styles.page}>
                        <View style={styles.container}>
                            <Image
                                style={styles.image}
                                source={country?.flags?.png}
                            />
                            <View style={styles.details}>
                                <Text style={styles.title}>Name: {country?.name}</Text>
                                <View style={styles.subtitle}>
                                    <Text style={styles.title}>Country Code: {country?.id}</Text>
                                </View>
                                <View style={styles.detailsFooter}>
                                    <Text style={styles.title}>Region: {country?.region}</Text>
                                </View>
                                <View style={styles.detailsFooter}>
                                    <Text style={styles.title}>
                                        Population: {country?.population}
                                    </Text>
                                </View>
                                <View style={styles.detailsFooter}>
                                    <Text style={styles.title}>
                                        Time zone: {country?.timezones}
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </Page>
                ))
            }
        </Document>
    );
    return(
        <>
            <Button>
                <PDFDownloadLink
                    document={<MyDocument/>}
                    fileName="countryList.pdf"
                    style={{
                        textDecoration: "none",
                        padding: "10px",
                        color: "#34c3ff",
                        backgroundColor: "transparent",
                        border: "1px solid #4a4a4a"
                    }}
                >
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download Pdf"
                    }
                </PDFDownloadLink>
            </Button>
        </>
    )
}
export default DownloadPDF
