import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

const Login = () => {
    return (
        <div>
            <Form inline>
                <FormGroup>
                    <Label for="exampleEmail" hidden>Email</Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword" hidden>
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;