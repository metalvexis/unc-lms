import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { FaFolderOpen } from "react-icons/fa6";
import UploadProgramForm from "./UploadProgramForm";

function UploadProgram() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="programs-form">
          <Button size="medium" $variant="secondary">
            <FaFolderOpen /> Upload Program
          </Button>
        </Modal.Open>
        <Modal.Window name="programs-form">
          <UploadProgramForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default UploadProgram;
