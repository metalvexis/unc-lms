import styled from "styled-components";
import Table from "../../ui/Table";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";

const Row = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-5);
`;

function ProgramRow({ program }) {
  const { program_code, program_name, program_head } = program;
  const { user } = useUser();

  if (!user) return;

  const isDean =
    user[0].faculty.asDean[0] || user[0].faculty.asAssistantDean[0];

  let firstName = program_head[0] && program_head[0].firstname;
  let lastName = program_head[0] && program_head[0].lastname;

  return (
    <Table.Row>
      <Row>{program_code}</Row>
      <Row>{program_name}</Row>
      {firstName && lastName ? (
        <Row>
          {firstName} {lastName}
        </Row>
      ) : (
        <Row>
          {isDean ? (
            <Button $variant="secondary" size="small">
              Add program head
            </Button>
          ) : (
            "-"
          )}
        </Row>
      )}
    </Table.Row>
  );
}

export default ProgramRow;
