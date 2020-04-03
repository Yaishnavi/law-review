import React, { Component,ProtoTypes } from "react";
import {List, ListItem, ListItemText} from 'material-ui/List'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { Container, Button, Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export class CreatePDFLists extends Component 
{
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
      e.preventDefault();
      this.props.goBack();
    };

    printDocument() {
      const input = document.getElementById('root');
      html2canvas(input)
        .then((canvas,width="1000", height="1000") => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          const imgProps= pdf.getImageProperties(imgData);
          const pdfwidth = pdf.internal.pageSize.getWidth();
          const pdfheight = pdf.internal.pageSize.getHeight();
          //const pdfheight = (imgProps.height * pdfwidth) / imgProps.width;
          pdf.addImage(imgData, 'JPEG', 0, 0, pdfwidth, pdfheight);
          //pdf.addImage(imgData, 'JPEG', 0,0);
          // pdf.output('dataurlnewwindow');
          pdf.save("download.pdf");
        })
      ;
    };
    printDocuments(){
      const input = document.getElementByClassName('Id') ;
      const MyDocument = () => (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              ${input}
            </View>
          </Page>
        </Document>
      );
      ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
    };

    
    render() 
    {
        return(
            <MuiThemeProvider>
        <React.Fragment>
          <Container maxwidth="sm">
            <h1>Assisted Stark Law review</h1>
          </Container>
          <Container maxWidth="sm">
            <Card style={styles.cardmain}>
              <CardContent>
                <Typography variant="h5" component="h2" style={styles.cardmain}>
                {this.props.steps["Q4"].answer.No?"You may be at risk of Stark Law!":this.props.steps["Q4"].answer.Maybe?"You may be at risk of Stark Law!":
                this.props.steps["Q5"].answer.No?"You may be at risk of Stark Law!":this.props.steps["Q5"].answer.Maybe?"You may be at risk of Stark Law!":
                this.props.steps["Q6"].answer.No?"You may be at risk of Stark Law!":this.props.steps["Q6"].answer.Maybe?"You may be at risk of Stark Law!":
                "Stark Law may not apply."
                }<br/>
                For further consultation contact:<br/> xxx-xxx-xxxx <br/> <br/>                </Typography>
                <Typography variant="body2" component="p" align="justify">
                Q1: {this.props.steps["Q4"].questionText}<br/>
                Ans: {this.props.steps["Q4"].answer.Yes?"Yes": this.props.steps["Q4"].answer.No?"No":this.props.steps["Q4"].answer.Maybe?"Maybe":"Null"} <br/><br/>
                Q2: {this.props.steps["Q5"].questionText}<br/>
                Ans: {this.props.steps["Q5"].answer.Yes?"Yes": this.props.steps["Q5"].answer.No?"No":this.props.steps["Q5"].answer.Maybe?"Maybe":"Null"} <br/><br/>
                Q3: {this.props.steps["Q6"].questionText}<br/>
                Ans: {this.props.steps["Q6"].answer.Yes?"Yes": this.props.steps["Q6"].answer.No?"No":this.props.steps["Q6"].answer.Maybe?"Maybe":"Null"} <br/><br/>
                Q4: {this.props.steps["Q7"].questionText}<br/>
                Ans: <br/>
                {this.props.steps["Q7"].answer[0]? 
                "[1]  Entity Name: ".concat(this.props.steps["Q7"].answer[0].entityName,",    ",
                "Health Services: ",this.props.steps["Q7"].answer[0].healthService,",    ",
                "Compensation: ", this.props.steps["Q7"].answer[0].compensation, ",    ",
                "Compensation Type: ", this.props.steps["Q7"].answer[0].compensationType,",    ",
                "Ownership: ",
                this.props.steps["Q7"].answer[0].ownershipInterests[0].value?this.props.steps["Q7"].answer[0].ownershipInterests[0].label+", ":"",
                this.props.steps["Q7"].answer[0].ownershipInterests[1].value?this.props.steps["Q7"].answer[0].ownershipInterests[1].label+", ":"",
                this.props.steps["Q7"].answer[0].ownershipInterests[2].value?this.props.steps["Q7"].answer[0].ownershipInterests[2].label+", ":"",
                this.props.steps["Q7"].answer[0].ownershipInterests[3].value?this.props.steps["Q7"].answer[0].ownershipInterests[3].label+", ":"",
                this.props.steps["Q7"].answer[0].ownershipInterests[4].value?this.props.steps["Q7"].answer[0].ownershipInterests[4].label+", ":"",
                this.props.steps["Q7"].answer[0].ownershipInterests[5].value?this.props.steps["Q7"].answer[0].ownershipInterests[5].label+", ":"",
                this.props.steps["Q7"].answer[0].ownershipInterests[6].value?this.props.steps["Q7"].answer[0].ownershipInterests[6].label+", ":"",
                ):""}<br/>
                {this.props.steps["Q7"].answer[1]? 
                "[2]   Entity Name: ".concat(this.props.steps["Q7"].answer[1].entityName,",    ",
                "Health Services: ",this.props.steps["Q7"].answer[1].healthService,",    ",
                "Compensation: ", this.props.steps["Q7"].answer[1].compensation, ",    ",
                "Compensation Type: ", this.props.steps["Q7"].answer[1].compensationType,",    ",
                "Ownership: ",
                this.props.steps["Q7"].answer[1].ownershipInterests[0].value?this.props.steps["Q7"].answer[1].ownershipInterests[0].label+", ":"",
                this.props.steps["Q7"].answer[1].ownershipInterests[1].value?this.props.steps["Q7"].answer[1].ownershipInterests[1].label+", ":"",
                this.props.steps["Q7"].answer[1].ownershipInterests[2].value?this.props.steps["Q7"].answer[1].ownershipInterests[2].label+", ":"",
                this.props.steps["Q7"].answer[1].ownershipInterests[3].value?this.props.steps["Q7"].answer[1].ownershipInterests[3].label+", ":"",
                this.props.steps["Q7"].answer[1].ownershipInterests[4].value?this.props.steps["Q7"].answer[1].ownershipInterests[4].label+", ":"",
                this.props.steps["Q7"].answer[1].ownershipInterests[5].value?this.props.steps["Q7"].answer[1].ownershipInterests[5].label+", ":"",
                this.props.steps["Q7"].answer[1].ownershipInterests[6].value?this.props.steps["Q7"].answer[1].ownershipInterests[6].label+", ":"",
                ):""}<br/>
                {this.props.steps["Q7"].answer[2]? 
                "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[2].entityName,",    ",
                "Health Services: ",this.props.steps["Q7"].answer[2].healthService,",    ",
                "Compensation: ", this.props.steps["Q7"].answer[2].compensation, ",    ",
                "Compensation Type: ", this.props.steps["Q7"].answer[2].compensationType,",    ",
                "Ownership: ",
                this.props.steps["Q7"].answer[2].ownershipInterests[0].value?this.props.steps["Q7"].answer[2].ownershipInterests[0].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[1].value?this.props.steps["Q7"].answer[2].ownershipInterests[1].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[2].value?this.props.steps["Q7"].answer[2].ownershipInterests[2].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[3].value?this.props.steps["Q7"].answer[2].ownershipInterests[3].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[4].value?this.props.steps["Q7"].answer[2].ownershipInterests[4].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[5].value?this.props.steps["Q7"].answer[2].ownershipInterests[5].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[6].value?this.props.steps["Q7"].answer[2].ownershipInterests[6].label+", ":"",
                ):""}<br/>
                {this.props.steps["Q7"].answer[2]? 
                "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[2].entityName,",    ",
                "Health Services: ",this.props.steps["Q7"].answer[2].healthService,",    ",
                "Compensation: ", this.props.steps["Q7"].answer[2].compensation, ",    ",
                "Compensation Type: ", this.props.steps["Q7"].answer[2].compensationType,",    ",
                "Ownership: ",
                this.props.steps["Q7"].answer[2].ownershipInterests[0].value?this.props.steps["Q7"].answer[2].ownershipInterests[0].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[1].value?this.props.steps["Q7"].answer[2].ownershipInterests[1].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[2].value?this.props.steps["Q7"].answer[2].ownershipInterests[2].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[3].value?this.props.steps["Q7"].answer[2].ownershipInterests[3].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[4].value?this.props.steps["Q7"].answer[2].ownershipInterests[4].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[5].value?this.props.steps["Q7"].answer[2].ownershipInterests[5].label+", ":"",
                this.props.steps["Q7"].answer[2].ownershipInterests[6].value?this.props.steps["Q7"].answer[2].ownershipInterests[6].label+", ":"",
                ):""}<br/>
                {this.props.steps["Q7"].answer[3]? 
                "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[3].entityName,",    ",
                "Health Services: ",this.props.steps["Q7"].answer[3].healthService,",    ",
                "Compensation: ", this.props.steps["Q7"].answer[3].compensation, ",    ",
                "Compensation Type: ", this.props.steps["Q7"].answer[3].compensationType,",    ",
                "Ownership: ",
                this.props.steps["Q7"].answer[3].ownershipInterests[0].value?this.props.steps["Q7"].answer[3].ownershipInterests[0].label+", ":"",
                this.props.steps["Q7"].answer[3].ownershipInterests[1].value?this.props.steps["Q7"].answer[3].ownershipInterests[1].label+", ":"",
                this.props.steps["Q7"].answer[3].ownershipInterests[2].value?this.props.steps["Q7"].answer[3].ownershipInterests[2].label+", ":"",
                this.props.steps["Q7"].answer[3].ownershipInterests[3].value?this.props.steps["Q7"].answer[3].ownershipInterests[3].label+", ":"",
                this.props.steps["Q7"].answer[3].ownershipInterests[4].value?this.props.steps["Q7"].answer[3].ownershipInterests[4].label+", ":"",
                this.props.steps["Q7"].answer[3].ownershipInterests[5].value?this.props.steps["Q7"].answer[3].ownershipInterests[5].label+", ":"",
                this.props.steps["Q7"].answer[3].ownershipInterests[6].value?this.props.steps["Q7"].answer[3].ownershipInterests[6].label+", ":"",
                ):""}<br/>
                {this.props.steps["Q7"].answer[4]? 
                "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[4].entityName,",    ",
                "Health Services: ",this.props.steps["Q7"].answer[4].healthService,",    ",
                "Compensation: ", this.props.steps["Q7"].answer[4].compensation, ",    ",
                "Compensation Type: ", this.props.steps["Q7"].answer[4].compensationType,",    ",
                "Ownership: ",
                this.props.steps["Q7"].answer[4].ownershipInterests[0].value?this.props.steps["Q7"].answer[4].ownershipInterests[0].label+", ":"",
                this.props.steps["Q7"].answer[4].ownershipInterests[1].value?this.props.steps["Q7"].answer[4].ownershipInterests[1].label+", ":"",
                this.props.steps["Q7"].answer[4].ownershipInterests[2].value?this.props.steps["Q7"].answer[4].ownershipInterests[2].label+", ":"",
                this.props.steps["Q7"].answer[4].ownershipInterests[3].value?this.props.steps["Q7"].answer[4].ownershipInterests[3].label+", ":"",
                this.props.steps["Q7"].answer[4].ownershipInterests[4].value?this.props.steps["Q7"].answer[4].ownershipInterests[4].label+", ":"",
                this.props.steps["Q7"].answer[4].ownershipInterests[5].value?this.props.steps["Q7"].answer[4].ownershipInterests[5].label+", ":"",
                this.props.steps["Q7"].answer[4].ownershipInterests[6].value?this.props.steps["Q7"].answer[4].ownershipInterests[6].label+", ":"",
                ):""}<br/>
                {this.props.steps["Q7"].answer[5]? 
                "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[5].entityName,",    ",
                "Health Services: ",this.props.steps["Q7"].answer[5].healthService,",    ",
                "Compensation: ", this.props.steps["Q7"].answer[5].compensation, ",    ",
                "Compensation Type: ", this.props.steps["Q7"].answer[5].compensationType,",    ",
                "Ownership: ",
                this.props.steps["Q7"].answer[5].ownershipInterests[0].value?this.props.steps["Q7"].answer[5].ownershipInterests[0].label+", ":"",
                this.props.steps["Q7"].answer[5].ownershipInterests[1].value?this.props.steps["Q7"].answer[5].ownershipInterests[1].label+", ":"",
                this.props.steps["Q7"].answer[5].ownershipInterests[2].value?this.props.steps["Q7"].answer[5].ownershipInterests[2].label+", ":"",
                this.props.steps["Q7"].answer[5].ownershipInterests[3].value?this.props.steps["Q7"].answer[5].ownershipInterests[3].label+", ":"",
                this.props.steps["Q7"].answer[5].ownershipInterests[4].value?this.props.steps["Q7"].answer[5].ownershipInterests[4].label+", ":"",
                this.props.steps["Q7"].answer[5].ownershipInterests[5].value?this.props.steps["Q7"].answer[5].ownershipInterests[5].label+", ":"",
                this.props.steps["Q7"].answer[5].ownershipInterests[6].value?this.props.steps["Q7"].answer[5].ownershipInterests[6].label+", ":"",
                ):""}<br/>
                {this.props.steps["Q7"].answer[6]? 
                "[3]  Entity Name: ".concat(this.props.steps["Q7"].answer[6].entityName,",    ",
                "Health Services: ",this.props.steps["Q7"].answer[6].healthService,",    ",
                "Compensation: ", this.props.steps["Q7"].answer[6].compensation, ",    ",
                "Compensation Type: ", this.props.steps["Q7"].answer[6].compensationType,",    ",
                "Ownership: ",
                this.props.steps["Q7"].answer[6].ownershipInterests[0].value?this.props.steps["Q7"].answer[6].ownershipInterests[0].label+", ":"",
                this.props.steps["Q7"].answer[6].ownershipInterests[1].value?this.props.steps["Q7"].answer[6].ownershipInterests[1].label+", ":"",
                this.props.steps["Q7"].answer[6].ownershipInterests[2].value?this.props.steps["Q7"].answer[6].ownershipInterests[2].label+", ":"",
                this.props.steps["Q7"].answer[6].ownershipInterests[3].value?this.props.steps["Q7"].answer[6].ownershipInterests[3].label+", ":"",
                this.props.steps["Q7"].answer[6].ownershipInterests[4].value?this.props.steps["Q7"].answer[6].ownershipInterests[4].label+", ":"",
                this.props.steps["Q7"].answer[6].ownershipInterests[5].value?this.props.steps["Q7"].answer[6].ownershipInterests[5].label+", ":"",
                this.props.steps["Q7"].answer[6].ownershipInterests[6].value?this.props.steps["Q7"].answer[6].ownershipInterests[6].label+", ":"",
                ):""}<br/>
                </Typography>
                <Box component="span">
                  <Container maxWidth="sm">
                    <Button
                      variant="contained"
                      color="primary"
                      primary={"true"}
                      style={styles.button}
                      onClick={this.printDocument}
                    >
                      Download
                    </Button>
                  </Container>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
            
                    
        );
    }
    
}

const styles = {
    button: {
      marginTop: 15
    },
    cardmain: {
      minWidth: 275,
      margin: 15,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: 140,
      paddingTop: '15%',
    },
  };
  


export default CreatePDFLists;