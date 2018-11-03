import React from 'react';
import {FormGroup, ControlLabel, HelpBlock, FormControl, Panel, DropdownButton,
  Radio, Checkbox, Button, Form, Col, InputGroup, Glyphicon, MenuItem} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class FormExample extends React.Component {
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
    return (
      <div className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>
        <Panel>
          <Panel.Heading>Form Validation</Panel.Heading>
          <Panel.Body>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState="success"
              >
                <ControlLabel>Input text validation</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
            </form>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>Form components</Panel.Heading>
          <Panel.Body>
            <form>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Text"
                placeholder="Enter text"
              />
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
              />
              <FieldGroup id="formControlsPassword" label="Password" type="password" />
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="File"
                help="Example block-level help text here."
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

export default FormExample;
