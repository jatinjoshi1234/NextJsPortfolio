"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },

  title: {
    fontSize: 13,
    color: "#555",
    marginBottom: 20,
  },

  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
  },

  text: {
    marginBottom: 5,
    lineHeight: 1.5,
  },
});

function ResumeDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>Your Name</Text>

        <Text style={styles.title}>Store In-Charge | Inventory Management</Text>

        <Text style={styles.heading}>Professional Summary</Text>

        <Text style={styles.text}>
          Store In-Charge with over 1.5 years of experience in stock and
          inventory management in GIDC industrial environments.
        </Text>

        <Text style={styles.heading}>Experience</Text>

        <Text style={styles.text}>
          • Managed daily store and inventory operations.
        </Text>

        <Text style={styles.text}>
          • Maintained stock records and inventory levels.
        </Text>

        <Text style={styles.text}>
          • Handled receiving and issuing of materials.
        </Text>

        <Text style={styles.text}>
          • Maintained proper documentation of stock.
        </Text>

        <Text style={styles.text}>
          • Coordinated with different departments for material requirements.
        </Text>
      </Page>
    </Document>
  );
}

export default function ResumePDF() {
  return (
    <PDFDownloadLink document={<ResumeDocument />} fileName="resume.pdf">
      {({ loading }) => (loading ? "Creating PDF..." : "Download Resume")}
    </PDFDownloadLink>
  );
}
