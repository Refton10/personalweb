import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ProjectModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.description}
        </p>
        <iframe class="responsive-iframe" width="560" height="315" src={props.video}
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowFullScreen="true">
        </iframe>
        {/* <Button className='modalBtn2' >View code</Button> */}
        {/* <a href={props.code} className="modalBtn2" Target="_blank" >View Code</a> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className='modalBtn'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;