import React from 'react';
import {FormGroup, ControlLabel, HelpBlock, FormControl, Panel, DropdownButton,
  Radio, Checkbox, Button, Form, Col, InputGroup, Glyphicon, MenuItem, Grid, Row} from 'react-bootstrap';


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}  style={{margin:"20px"}}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class AddCourse extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
  const panelBackground =
  {
    backgroundColor: '#f2f2f2'
  };

 

    return (
      <div className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>
        <Panel style={panelBackground} bsClass="panelBackground">
          <Panel.Heading style={{fontSize:"2em"}}>Add Course</Panel.Heading>
           <Panel.Body>
           <form>
           <FieldGroup
             id="formControlsText"
             type="text"
             label="Title"
             placeholder="Title"
           />
            <FieldGroup
              id="formControlsDuration"
              type="text"
              label="Duration"
              placeholder="Duration"
            />
            <FieldGroup
              id="formControlsImagePath"
              type="text"
              label="Image Path"
              help="Image Path"
            />

          <Row>
          <Col xs={4} sm={4} md={4}></Col>
          <Col xs={2} sm={2} md={2}>
          <Button disabled='true'
          bsStyle="buttonStyle"
           style={{alignContent:"center"}}
            type="submit"
            
            >
            Submit
            </Button>
          </Col>
          <Col xs={2} sm={2} md={2}>
          <Button style={{alignContent:"center"}}  type="submit">Cancel</Button>
          </Col>
          <Col  xs={4} sm={4} md={4}></Col>
          </Row>
          </form>
        </Panel.Body>
     
          </Panel>
          {/* <Panel>
            <Panel.Heading>Inline form</Panel.Heading>
            <Panel.Body>
              <Form inline>
                <FormGroup controlId="formInlineName">
                  <ControlLabel>Name</ControlLabel>{' '}
                  <FormControl type="text" placeholder="Konstantinos Ztoupis" />
                </FormGroup>{' '}
                <FormGroup controlId="formInlineEmail">
                  <ControlLabel>Email</ControlLabel>{' '}
                  <FormControl type="email" placeholder="kztoup@example.com" />
                </FormGroup>{' '}
                <Button type="submit">Send</Button>
              </Form>
            </Panel.Body>
          </Panel> */}
          {/* <Panel>
            <Panel.Heading>Horizontal form</Panel.Heading>
            <Panel.Body>
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">Sign in</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Panel.Body>
          </Panel> */}
          {/* <Panel>
            <Panel.Heading>Input groups</Panel.Heading>
            <Panel.Body>
              <form>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>@</InputGroup.Addon>
                    <FormControl type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" />
                    <InputGroup.Addon>.00</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl type="text" />
                    <InputGroup.Addon>.00</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" />
                    <InputGroup.Addon>
                      <Glyphicon glyph="music" />
                    </InputGroup.Addon>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup>
                    <InputGroup.Button>
                      <Button>Before</Button>
                    </InputGroup.Button>
                    <FormControl type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" />
                    <DropdownButton
                      componentClass={InputGroup.Button}
                      id="input-dropdown-addon"
                      title="Action"
                    >
                      <MenuItem key="1">Item</MenuItem>
                    </DropdownButton>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <input type="radio" aria-label="..." />
                    </InputGroup.Addon>
                    <FormControl type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <input type="checkbox" aria-label="..." />
                    </InputGroup.Addon>
                    <FormControl type="text" />
                  </InputGroup>
                </FormGroup>
              </form>
            </Panel.Body>
          </Panel> */}
      </div>
    );
  }
}


export default AddCourse;
