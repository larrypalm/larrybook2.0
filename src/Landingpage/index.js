import React from 'react';
import styled from 'react-emotion';
import { Column, Row } from 'core-components/Layout';
import { Text } from 'core-components'

const Wrapper = styled(Column)`
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const LogginSquare = styled(Column)`
    background-color: coral;
    height: 400px;
    width: 400px;
    justify-content: center;
    align-items: center;
`;

const Landingpage = props => {
    return (
        <Wrapper>
            <LogginSquare>
                <Row>
                    <Text>
                        Username:
                    </Text>
                    <input placeholder="Please enter your username"/>
                </Row>
                <Row>
                    <Text>
                        Password:
                    </Text>
                    <input />
                </Row>
            </LogginSquare>
        </Wrapper>
    )
}

export default Landingpage;
