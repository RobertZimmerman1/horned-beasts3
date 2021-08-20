// Import Links --------------------------------------------------------------------------------
import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Hornedbeasts from './hornedbeast.js';
import beastImages from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Main Section Component --------------------------------------------------------------------------------

class Main extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Hornedbeasts src={beastImages[0].image_url} title={beastImages[0].title} description={beastImages[0].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[1].image_url} title={beastImages[1].title} description={beastImages[1].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[2].image_url} title={beastImages[2].title} description={beastImages[2].description} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Hornedbeasts src={beastImages[3].image_url} title={beastImages[3].title} description={beastImages[3].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[4].image_url} title={beastImages[4].title} description={beastImages[4].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[5].image_url} title={beastImages[5].title} description={beastImages[5].description} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Hornedbeasts src={beastImages[6].image_url} title={beastImages[6].title} description={beastImages[6].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[7].image_url} title={beastImages[7].title} description={beastImages[7].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[8].image_url} title={beastImages[8].title} description={beastImages[8].description} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Hornedbeasts src={beastImages[9].image_url} title={beastImages[9].title} description={beastImages[9].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[10].image_url} title={beastImages[10].title} description={beastImages[10].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[11].image_url} title={beastImages[11].title} description={beastImages[11].description} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Hornedbeasts src={beastImages[12].image_url} title={beastImages[12].title} description={beastImages[12].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[13].image_url} title={beastImages[13].title} description={beastImages[13].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[14].image_url} title={beastImages[14].title} description={beastImages[14].description} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Hornedbeasts src={beastImages[15].image_url} title={beastImages[15].title} description={beastImages[15].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[16].image_url} title={beastImages[16].title} description={beastImages[16].description} />
          </Col>
          <Col>
            <Hornedbeasts src={beastImages[17].image_url} title={beastImages[17].title} description={beastImages[17].description} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Hornedbeasts src={beastImages[18].image_url} title={beastImages[18].title} description={beastImages[18].description} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
