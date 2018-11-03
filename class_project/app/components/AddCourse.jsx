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

            <Checkbox checked readOnly>
              Checkbox
            </Checkbox>
            <Radio checked readOnly>
              Radio
            </Radio>

            <FormGroup>
              <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
              <Checkbox inline>3</Checkbox>
            </FormGroup>
            <FormGroup>
              <Radio name="radioGroup" inline>
                1
              </Radio>{' '}
              <Radio name="radioGroup" inline>
                2
              </Radio>{' '}
              <Radio name="radioGroup" inline>
                3
              </Radio>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelectMultiple">
              <ControlLabel>Multiple select</ControlLabel>
              <FormControl componentClass="select" multiple>
                <option value="select">select (multiple)</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Textarea</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Static text</ControlLabel>
              <FormControl.Static>kztoup@example.com</FormControl.Static>
            </FormGroup>

            <Button type="submit">Submit</Button>
          </form>
        </Panel.Body>
     
          </Panel>
          <Panel>
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
          </Panel>
          <Panel>
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
          </Panel>
          <Panel>
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
          </Panel>
      </div>
    );
  }
}


export default AddCourse;
