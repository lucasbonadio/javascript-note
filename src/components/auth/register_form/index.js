import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import { Navigate } from "react-router-dom";
import { ColumnGroup } from 'rbx/grid/columns/column-group';

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    if(redirectToLogin) {
        return <Navigate to={{pathname: '/login'}} />
    };

    return (
        <Fragment>
            <ColumnGroup centered>
                <form>
                    <Column size={12}>
                        <Field>
                            <Label size='small'>Name:</Label>
                            <Control>
                                <Input type='name' name='name' value={name} onChange={e => setName(e.target.value)} required />
                            </Control>
                        </Field>
                        <Field>
                            <Label size='small'>Email:</Label>
                            <Control>
                                <Input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} required />
                            </Control>
                        </Field>
                        <Field>
                            <Label size='small'>Password:</Label>
                            <Control>
                                <Input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} required />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <ColumnGroup breakpoint='mobile'>
                                    <Column>
                                        <a onClick={e => setRedirectToLogin(true)} className='button is-white has-text-custom-purple'>Login</a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Register</Button>
                                    </Column>
                                </ColumnGroup>
                            </Control>
                        </Field>
                        { error && <Help color='danger'>Email or password invalid</Help> }
                    </Column>
                </form>
            </ColumnGroup>
        </Fragment>
    )
}

export default RegisterForm;