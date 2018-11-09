import React from 'react';
import {FormGroup, ControlLabel, HelpBlock, FormControl, Panel, DropdownButton,
  Radio, Checkbox, Button, Form, Col, InputGroup, Glyphicon, MenuItem, Grid, Row} from 'react-bootstrap';


function FieldGroup({blur, id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}  bsClass="formGroup">
      <ControlLabel bsClass="label">{label}</ControlLabel>
      <FormControl {...props} onBlur={blur}/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class AddCourse extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.groupValidation = this.groupValidation.bind(this);
    this.handleSubmit  =this.handleSubmit.bind(this);
    this.updateCheckBoxes  =this.updateCheckBoxes.bind(this);
    this.initializeFormValues = this.initializeFormValues.bind(this);
    this.updateBookableValue  =this.updateBookableValue.bind(this);

    this.state = {
      Title:'',
      Duration:'',
      ImagePath:'',
      EndDate:'',
      StartDate:'',
      EarlyBid:'',
      Normal:'',
      Description:'',
      isCheck1:true,
      isCheck2:false,
      isBookable:false,
    };
  }

  componentDidMount(){
    this.initializeFormValues();
  }

  initializeFormValues(){
    this.isButtonDisable = true;
  }
  

    handleChange(event) {
      let fieldName = event.target.name;
      let fleldVal = event.target.value;
      this.setState({[fieldName]: event.target.value});
    }

  updateCheckBoxes(e){
    this.setState({"isCheck1": !this.state.isCheck1});
    this.setState({"isCheck2": !this.state.isCheck2});
    // if(e.target.name=='Chk1'){
    //   setTimeout( () => {
    //     this.setState({"isCheck1": !this.state.isCheck1});
    //     this.setState({"isCheck2": !this.state.isCheck2});

    //   }, 0);
    // }
    // else{
    //   setTimeout( () => {
    //     this.setState({"isCheck2": !this.state.isCheck2});
    //     this.setState({"isCheck1": !this.state.isCheck1});

    //   }, 0);
    // }
    this.groupValidation();
  }

  updateBookableValue(){
    this.setState({"isBookable": !this.state.isBookable});
    this.setState({"Title": this.state.Title});
    this.groupValidation();
  }

  handleSubmit(e){
    let instructorSelected = this.state.isCheck1?"01":"02";
    console.log('submit form', this.state.value);
    var data = {"id": "100","title":this.state.Title, "imagePath": this.state.ImagePath,
  "price":{"normal":this.state.Normal, "early_bird":this.state.EarlyBid},
"date":{start_date:this.state.StartDate, "end_date":this.state.EndDate},
"duration":this.state.Duration, "open":this.state.isBookable,
 "instructors":[
  instructorSelected
], "description":this.state.Description};


    fetch("http://localhost:3000/courses", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
    //e.preventDefault();
  }

  
  groupValidation() {
    this.isButtonDisable=false;
    if(!this.state.isBookable || (!(this.state.isCheck1)&&!(this.state.isCheck2))){
      this.isButtonDisable=false;
    }
    if(this.state.Title =='' || this.state.StartDate==''|| this.state.Duration==''|| this.state.EarlyBid==''||
    this.state.EndDate==''||this.state.Description==''||this.state.ImagePath==''|| this.state.Normal==''){
      this.isButtonDisable=false;
    }
  }

  render() {
  const panelBackground =
  {
    backgroundColor: '#c8cace'
  };

 

  //let formatter = Globalize.dateFormatter({ raw: 'MMM dd, yyyy' });

 

    return (
      <div className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>
        <Panel style={panelBackground} bsClass="panelBackground">
          <Panel.Heading className="title">Add Course</Panel.Heading>
           <Panel.Body>
           <form>
            <FormGroup controlId="Title" bsClass="formGroup">
              <ControlLabel bsClass="label">Title</ControlLabel>
              <FormControl
              type="Text"
              name="Title"
              onBlur={this.groupValidation}
              placeholder="Title"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            </FormGroup>

             <FormGroup controlId="Dutation" bsClass="formGroup">
              <ControlLabel bsClass="label">Duration</ControlLabel>
              <FormControl
              type="Text"
              name="Duration"
              onBlur={this.groupValidation}
              placeholder="Dutation"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="ImagePath" bsClass="formGroup">
              <ControlLabel bsClass="label">ImagePath</ControlLabel>
              <FormControl
              type="Text"
              name="ImagePath"
              onBlur={this.groupValidation}
              placeholder="Image Path"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            </FormGroup>

            {/* //checkboxes */}
            <ControlLabel className="checkbox-title">Bookable</ControlLabel>
            <Checkbox className="checkbox" checked={this.state.isBookable} name="Bookable" onChange={this.updateBookableValue}>Bookable</Checkbox>

            <ControlLabel className="checkbox-title" style={{paddingTop:5}}>Instructors</ControlLabel>
            <Checkbox checked={this.state.isCheck1} className="checkbox" name="Chk1" onChange={this.updateCheckBoxes}>John Tsevdos</Checkbox>
            <Checkbox checked={this.state.isCheck2} className="checkbox" name="Chk2" onChange={this.updateCheckBoxes}>Yiannis Nikolakopoulos</Checkbox>

            <FormGroup controlId="Description" bsClass="formGroup">
              <ControlLabel bsClass="label">Description</ControlLabel>
              <FormControl
              componentClass="textarea"
              name="Description"
              onBlur={this.groupValidation}
              placeholder="Description"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            </FormGroup>

            <ControlLabel className="sub-title">Dates</ControlLabel>
            <FormGroup controlId="StartDate" bsClass="formGroup">
              <ControlLabel bsClass="label">StartDate</ControlLabel>
              <FormControl
              type="text"
              name="StartDate"
              onBlur={this.groupValidation}
              placeholder="Start Date"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            </FormGroup>
           
            <FormGroup controlId="EndDate" bsClass="formGroup">
              <ControlLabel bsClass="label">EndDate</ControlLabel>
              <FormControl
              type="text"
              name="EndDate"
              onBlur={this.groupValidation}
              placeholder="End Date"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            </FormGroup>

            <ControlLabel className="sub-title">Price</ControlLabel>
            <FormGroup controlId="EarlyBid" bsClass="formGroup">
              <ControlLabel bsClass="label">EarlyBid</ControlLabel>
                  <InputGroup>
                      <FormControl
                        type="number"
                        name="EarlyBid"
                        onBlur={this.groupValidation}
                        placeholder="Early Bid"
                        onChange={this.handleChange}
                      />
                      <InputGroup.Addon>€</InputGroup.Addon>
                </InputGroup>
                 <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="Normal" bsClass="formGroup">
              <ControlLabel bsClass="label">Normal</ControlLabel>
              <InputGroup>
                      <FormControl
                        onBlur={this.groupValidation}
                        name="Normal"
                        placeholder="Early Bid"
                        onChange={this.handleChange}
                        type="number"
                      />
                      <InputGroup.Addon>€</InputGroup.Addon>
                </InputGroup>
                 <FormControl.Feedback />
            </FormGroup>

          <Row>
            <Col xs={9} sm={9} md={9}></Col>
            <Col xs={2} sm={2} md={2}>
              <Button 
                disabled={this.isButtonDisable}
                className="button-submit"
                style={{alignContent:"center"}}
                type="submit"
                onClick={this.handleSubmit}>
                Submit
              </Button>
          </Col>
          </Row>
           
          
          </form>
        </Panel.Body>
          </Panel>
      </div>
    );
  }
}

export default AddCourse;

 
            {/* <DateTimePicker
               //editFormat={formatter} 
              // defaultValue={new Date()}
               format={{ raw: 'MMM dd, yyyy' }}
               time={false}
              /> */}