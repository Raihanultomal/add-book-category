import React, { useState } from 'react';
import CategoryA from './CategoryA';
import CategoryAB from './CategoryAB';
import DetailsField from './DetailsField';
import PopUpWindow from './PopUpWindow';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/home.css';

export default function Home() {
  // const [newItem, setNewitem] = useState('');
  const [newItemA, setNewitemA] = useState('');
  const [newItemB, setNewitemB] = useState('');
  // eta addButton click korle ki hobe setar jonne

  const [add, setAdd] = useState(false);

  const addBook = () => {
    setAdd(true);
  };

  const onAddNewItem = (item) => {
    // setNewitem(item);
    if (item.category === 'A') {
      setNewitemA(item);
    } else {
      setNewitemB(item);
    }
  };

  // ekhane hook use kore data er value gulo insert kora hocce

  const [detailsData, setData] = useState('');

  // child theke parents e data pathanow way follow kora hoyeche.

  function homeTodetails(detailsData) {
    setData(detailsData);
  }

  // const homeTodetails = (detailsData) => {
  //   setData(detailsData);
  // };

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <CategoryA data={newItemA} homeTodetails={homeTodetails} />
            </Col>
          </Row>
          <Row>
            <Col>
              <CategoryAB data={newItemB} homeTodetails={homeTodetails} />
            </Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Col>
              <button onClick={addBook}>Add Book</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <DetailsField detailsData={detailsData} />
              {/* ekhane jodi button e click kora hoy add=true hobe tokhn form ta dekhabe */}
              {add ? <PopUpWindow onAddNewItem={onAddNewItem} /> : ''}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
