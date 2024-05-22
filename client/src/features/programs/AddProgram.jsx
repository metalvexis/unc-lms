import Button from "../../ui/Button";
import CreateProgramForm from "./CreateProgramForm";
import Modal from "../../ui/Modal";
import { FaPlus } from "react-icons/fa6";

function AddProgram() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="programs-form">
          <Button size="medium" $variant="secondary">
            <FaPlus /> Add Program
          </Button>
        </Modal.Open>
        <Modal.Window name="programs-form">
          <CreateProgramForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddProgram;
