import React from 'react';
import {FormGroup, ControlLabel, HelpBlock, FormControl, Panel, DropdownButton,
  Radio, Checkbox, Button, Form, Col, InputGroup, Glyphicon, MenuItem, Grid, Row} from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

class AddCourse extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.groupValidation = this.groupValidation.bind(this);
    this.handleSubmit  =this.handleSubmit.bind(this);
    this.updateCheckBoxes  =this.updateCheckBoxes.bind(this);
    this.initializeFormValues = this.initializeFormValues.bind(this);
    this.updateBookableValue  =this.updateBookableValue.bind(this);
    this.prepareRequest  =this.prepareRequest.bind(this);

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
      coursesItems: [],
    };
  }

  componentDidMount(){
    fetch('http://localhost:3000/courses')
    .then(function(response) {
        return response.json();
    }).then((courses) => {
        this.setState({
          coursesItems:courses
        });
        console.log("array", courses);
    }).then(()=>{
        this.initializeFormValues();
    })
    
  }

  initializeFormValues(){
    if(this.props.match.params.id !== undefined){
      var course = this.state.coursesItems.find(item =>  item.id == this.props.match.params.id);
      console.log("is", course===undefined);
      if(course!==undefined){
        this.setState({
          Title: course.title,
          Duration:course.duration,
          ImagePath: course.imagePath,
          isBookable :course.open,
          isCheck1: course.instructors[0]=='01'? true:false,
          isCheck2: course.instructors[0]=='02'? true:false,
          Description: ReactHtmlParser(course.Description),
          StartDate: course.dates.start_date,
          EndDate: course.dates.end_date,
          EarlyBid:course.price.early_bird,
          Normal:course.price.normal
        });  
     }
  }
    this.isButtonDisable = false;
  }
  

    handleChange(event) {
      let fieldName = event.target.name;
      this.setState({[fieldName]: event.target.value});
    }


  updateCheckBoxes(e){
    this.setState({"isCheck1": !this.state.isCheck1});
    this.setState({"isCheck2": !this.state.isCheck2});
    this.groupValidation();
  }

  updateBookableValue(){
    this.setState({"isBookable": !this.state.isBookable});
    this.setState({"Title": this.state.Title});
    this.groupValidation();
  }

  prepareRequest(idParam, methodParam){
    let id =idParam
    let endPoint = methodParam =='PUT'? '/' + idParam: '';
          console.log("id", id);
          let instructorSelected = this.state.isCheck1?"01":"02";
          console.log('submit form', this.state.value);
          var data = {"id": String(id),"title":this.state.Title, "imagePath": this.state.ImagePath,
              "price":{"normal":this.state.Normal, "early_bird":this.state.EarlyBid},
            "dates":{"start_date":this.state.StartDate, "end_date":this.state.EndDate},
            "duration":this.state.Duration, "open":this.state.isBookable,
            "instructors":[
              instructorSelected
            ], "description":this.state.Description};

      fetch("http://localhost:3000/courses" + endPoint , {
            method: methodParam, // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
  }


  handleSubmit(){
    if(this.props.match.params.id !== undefined){
      this.prepareRequest(this.props.match.params.id, 'PUT');
    }
    else{
      this.prepareRequest(this.state.coursesItems.length +1, 'POST');
    }
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
    return (
      <div className ="form">
        <span className="main-title">Add Course</span>
        <div className ="form-body">
          <form>
            <FormGroup controlId="Title" bsClass="formGroup">
              <ControlLabel bsClass="label">Title</ControlLabel>
              <FormControl  type="Text"
                            defaultValue={this.state.Title}
                            name="Title"
                            onBlur={this.groupValidation}
                            placeholder="Title"
                            onChange={this.handleChange} />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="Dutation" bsClass="formGroup">
              <ControlLabel bsClass="label">Duration</ControlLabel>
              <FormControl  type="Text"
                            name="Duration"
                            defaultValue={this.state.Duration}
                            onBlur={this.groupValidation}
                            placeholder="Dutation"
                            onChange={this.handleChange}/>
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="ImagePath" bsClass="formGroup">
              <ControlLabel bsClass="label">ImagePath</ControlLabel>
              <FormControl  type="Text"
                            name="ImagePath"
                            defaultValue={this.state.ImagePath}
                            onBlur={this.groupValidation}
                            placeholder="Image Path"
                            onChange={this.handleChange}/>
              <FormControl.Feedback />
            </FormGroup>

            <ControlLabel className="checkbox-title">Bookable</ControlLabel>
            <Checkbox className="checkbox" checked={this.state.isBookable} name="Bookable" onChange={this.updateBookableValue}>Bookable</Checkbox>

            <ControlLabel className="checkbox-title" style={{paddingTop:5}}>Instructors</ControlLabel>
            <Checkbox checked={this.state.isCheck1} className="checkbox" name="Chk1" onChange={this.updateCheckBoxes}>John Tsevdos</Checkbox>
            <Checkbox checked={this.state.isCheck2} className="checkbox" name="Chk2" onChange={this.updateCheckBoxes}>Yiannis Nikolakopoulos</Checkbox>

            <FormGroup controlId="Description" bsClass="formGroup">
              <ControlLabel bsClass="label">Description</ControlLabel>
              <FormControl  componentClass="textarea"
                            name="Description"
                            defaultValue={this.state.Description}
                            onBlur={this.groupValidation}
                            placeholder="Description"
                            onChange={this.handleChange}/>
              <FormControl.Feedback />
            </FormGroup>

            <ControlLabel className="sub-title">Dates</ControlLabel>
            <FormGroup controlId="StartDate" bsClass="formGroup">
              <ControlLabel bsClass="label">StartDate</ControlLabel>

              <FormControl
                type="date"
                name="StartDate"
                max="9999-12-31"
                defaultValue={this.state.StartDate}
                onBlur={this.groupValidation}
                placeholder="Start Date"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          
            <FormGroup controlId="EndDate" bsClass="formGroup">
              <ControlLabel bsClass="label">EndDate</ControlLabel>

              <FormControl
                type="date"
                max="9999-12-31"
                name="EndDate"
                defaultValue={this.state.EndDate}
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
                  <FormControl  type="number"
                                name="EarlyBid"
                                defaultValue={this.state.EarlyBid}
                                onBlur={this.groupValidation}
                                placeholder="Early Bid"
                                onChange={this.handleChange} />
                  <InputGroup.Addon>€</InputGroup.Addon>
                  <FormControl.Feedback />
              </InputGroup>
            </FormGroup>

            <FormGroup controlId="Normal" bsClass="formGroup">
              <ControlLabel bsClass="label">Normal</ControlLabel>
              <InputGroup>
                <FormControl  onBlur={this.groupValidation}
                              name="Normal"
                              defaultValue={this.state.Normal}
                              placeholder="Early Bid"
                              onChange={this.handleChange}
                              type="number" />
                <InputGroup.Addon>€</InputGroup.Addon>
                <FormControl.Feedback />
              </InputGroup>
            </FormGroup>  
            
            <div className="form-button">
              <Button disabled={this.isButtonDisable}
                      type="submit"
                      onClick={this.handleSubmit}>Submit </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddCourse;