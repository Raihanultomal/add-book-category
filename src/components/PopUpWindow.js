import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../CSS/popupWindow.css';

export default function PopUpWindow(props) {
  const [newItem, setNewitem] = useState({ title: '', url: '', category: '' });
  const { title, url, category } = newItem;

  // const [title, setTitle] = useState('');
  // const [url, setUrl] = useState('');
  // const [category, setCategory] = useState('');

  const handlaChange = (event) => {
    event.preventDefault();
    // amra first e jei field theke value gulo ashbe sei field er name collect korbo
    // er pore sei field er value gulo nibo.
    const name = event.target.name;
    setNewitem((oldItem) => {
      return { ...oldItem, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onAddNewItem(newItem);

    setNewitem({ title: '', url: '', category: '' });
  };

  return (
    <div className="popup">
      <h1>Add Bookmark</h1>

      <Col>
        <Row>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handlaChange}
            value={title}
          />
        </Row>
        <Row>
          <input
            type="text"
            name="url"
            placeholder="Url"
            onChange={handlaChange}
            value={url}
          />
        </Row>
        <Row>
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handlaChange}
            value={category}
          />
          <button>+</button>
        </Row>
        <Row>
          <button>Cencle</button>
          <button onClick={handleSubmit}>Save</button>
        </Row>
      </Col>
    </div>
  );
}
