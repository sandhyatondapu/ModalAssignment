import '../../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useState } from 'react';
import ModalWindow from './Modal.js';
import Button from 'react-bootstrap/Button';

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [countervalue, setCountervalue] = useState(0);

  const opneModal = useCallback(() => {
    setModalIsOpen(true);
    setCountervalue(countervalue + 1)
  }, [countervalue, setCountervalue, setModalIsOpen]);

  const resetCounter = useCallback(() => {
    setCountervalue(0)
  }, [setCountervalue]);

  const ModalProps = {
    modalIsOpen,
    countervalue,
    setModalIsOpen,
  }
  const props = {
    ...ModalProps,
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Example Modal With Counter</h1>
        <ModalWindow props={props} />
        <Button className="pageButtons" onClick={opneModal}>Open</Button>
        <Button className="pageButtons" onClick={resetCounter}>Reset</Button>
      </div>
    </div>
  );
}

export default Home;
