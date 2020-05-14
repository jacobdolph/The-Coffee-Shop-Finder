import React from 'react';
import { Container, Row, Col } from '../Grid';
import Card from '../Card'

function CoffeeList() {
    return (
        <Container>
            <Row>
                <Col size={'md-3'}>
                    <Card />
                </Col>
                <Col size={'md-3'}>
                    <Card />
                </Col>
                <Col size={'md-3'}>
                    <Card />
                </Col>
                <Col size={'md-3'}>
                    <Card />
                </Col>

            </Row>
        </Container>
    )
}

export default CoffeeList;