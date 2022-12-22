import {React,useState,useRef} from "react";
import { Button, Form, Modal } from "react-bootstrap";
import './CreateFolder.css';

import { faFolderPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CreateFolder(){

    const[showModal,setShowModal]=useState(false);
    const [folderName, setFolderName] = useState("");
     return(
        <>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header>
            <Modal.Title>Create Folder</Modal.Title>
            <Button
              variant="white"
              style={{ cursor: "pointer" }}
              onClick={() => setShowModal(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicFolderName" className="my-2">
                <Form.Control
                  type="text"
                  placeholder="Enter folder name..."
                  value={folderName}
                  onChange={(e) => setFolderName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicFolderSubmit" className="mt-5">
                <Button type="submit" className="form-control" variant="primary">
                  Add Folder
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
        <Button
          onClick={() => setShowModal(true)}
          variant="outline-dark"
          className="border-5  align-items-center "
          id="jam"
        >
          <FontAwesomeIcon icon={faFolderPlus} />
          &nbsp; Create Folder
        </Button>
      </>
     ) 
    }
    
export default CreateFolder;