import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import routerImg from './images/myNet-with-sticker.png'

const styles = {
  item: {
    marginBottom: 20
  },
  center: {
    textAlign: 'center'
  }
}

export default function Frontage ({ neighbors, internetNeighbor, totalTransfered, sharing }) {
  return <Container>
    <Row>
      <div style={ styles.center }>
        <img src={routerImg} />
      </div>
      <Col style={ styles.item }>This is the dashboard for your new PeoplesOpen.net router. If there are enough routers nearby, they form a "mesh network" which can provide internet access.</Col>

      <Col><h3>Status:</h3></Col>

      <Col style={ styles.item }>Right now, you're connected to three neighbor routers: { commaAndString(neighbors.map(neighbor => neighbor.name)) }</Col>

      <Col style={ styles.item }>You're connected to the internet through <b>{ internetNeighbor }</b>.</Col>

      <Col style={ styles.item }>So far, you've transferred { totalTransfered } of data between neighbor routers.</Col>

      { sharing &&
        <Col></Col>
      ||
        <Col style={ styles.item }>Your home internet connection is currently not being shared on the mesh network. If you'd like to securely donate a small portion of your own bandwidth to this project, click here to start sharing.</Col>
      }
    </Row>
  </Container>
}

export function commaAndString (items) {
  return items.map((item, i, arr) => {
    if (i === (arr.length - 2)) {
      return <span><b>{item}</b>{(arr.length < 3 ? ' and ' : ', and ')}</span>
    } else if (i === (arr.length - 1)) {
      return <b>{item}</b>
    } else {
      return <b>{item}, </b>
    }
  })
}