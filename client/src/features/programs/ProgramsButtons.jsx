import ButtonGroup from "../../ui/ButtonGroup";
import { useUser } from "../authentication/useUser";
import AddProgram from "./AddProgram";
import UploadProgram from "./UploadProgram";

function ProgramsButtons() {
  const { user } = useUser();

  if (!user) return;

  const isDean =
    user[0].faculty.asDean[0] || user[0].faculty.asAssistantDean[0];

  return (
    <ButtonGroup>
      {isDean ? (
        <>
          <UploadProgram />
          <AddProgram />
        </>
      ) : (
        ""
      )}
    </ButtonGroup>
  );
}

export default ProgramsButtons;
