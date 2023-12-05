import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#2f76ff',
      size: "A4",
    },
    section: {
      margin: 100,
      padding: 100,
      flexGrow: 1
    }
  });

const Report = () => {

    const MyDocument = () => (
    <Document>
        <Page style={styles.page}>
        <View style={styles.section}>
            <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
            <Text>Section #2</Text>
        </View>
        </Page>
    </Document>
    );

    return (
        <>
            <h1>Report</h1>
            <MyDocument />
        </>
    );
};

export default Report