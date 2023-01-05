import React from "react";
import NavBar from "./NavBar";
import { Form, Button, Label, Input, FormGroup} from "reactstrap";

function Feedback() {

    return (
        <div className ="container">
            <NavBar />
            <div className="container text-center my-5">
                <h1>Feedback</h1>
            </div>
            <div className="container">
                <Form>
                    <FormGroup>
                        <Label for="exampleName">
                            Name (optional)
                        </Label>
                        <Input 
                            id="exampleName"
                            name="name"
                            placeholder="enter your name"
                            type="name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email (optional)
                        </Label>
                        <Input 
                            id="exampleEmail"
                            name="email"
                            placeholder="enter your email"
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFeedback">
                            Feedback 
                        </Label>
                        <Input 
                            id="exampleFeedback"
                            name="feedback"
                            placeholder="10 character limit (for demo only, otherwise 500 limit)"
                            type="textarea"
                            maxLength={10}
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" />
                        {''}
                        <Label check>
                            Subscribe to our monthly newsletter
                        </Label>
                    </FormGroup>
                    <Button 
                    type="submit"
                    color="primary"
                    className="my-4 me-3"
                    >
                    Submit
                    </Button>
                </Form>
            </div>

        </div>            
    );


}

export default Feedback;