import React from 'react';
import { Col, Row, Container } from '../Grid'

function Title() {

    return (
        <Container fluid>
            <Row>
                <Col
                    size='md-12'
                >
                    <div>
                        <h1 className={'text-center'} style={{ color: 'blanchedalmond', textTransform: 'capitalize', marginTop: '10rem' }}>My
                        Coffee
            Finder</h1>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Title;