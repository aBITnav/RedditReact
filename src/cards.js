import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import { useState } from "react";


export default function Cards({cardInfo=[]}) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
  return (
      <div className="col-sm">
        <Card bg='light' border="secondary" onClick={handleShow} className="cards-style">
            <Card.Header><h4>{cardInfo.author}</h4></Card.Header>
            <Card.Body>
                <Card.Img variant="top" className="img-style" src={cardInfo.url} />
            </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cardInfo.author}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img className="card-img-top" src={cardInfo.url} alt="Card"/>
            <p className="lead">{cardInfo.title}</p>
        </Modal.Body>
        <Modal.Footer className="aaa">
            <FontAwesomeIcon icon={faThumbsUp}  size="lg" color="green" />
                <p className="lead">{cardInfo.upvotes}</p>
            <Button onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
        </Modal>
        </div>
  );
};
