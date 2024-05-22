import Table from "../../ui/Table";
import { usePrograms } from "./usePrograms";
import ProgramRow from "./ProgramRow";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import { usePeriod } from "./usePeriod";

function ProgramsTable() {
  const { isLoading, programs } = usePrograms();
  const { period } = usePeriod();

  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");

  let sortedPrograms;

  if ((programs && sortBy === "programCode-asc") || (programs && !sortBy)) {
    sortedPrograms = programs.sort((a, b) =>
      a.program_code.localeCompare(b.program_code)
    );
  }

  if (programs && sortBy === "programCode-desc") {
    sortedPrograms = programs.sort((a, b) =>
      b.program_code.localeCompare(a.program_code)
    );
  }

  if (isLoading) return <Spinner />;
  if (!programs || !period) return;

  return (
    <Table columns="5fr 7fr 2.25fr">
      <Table.Header>
        <div>PROGRAM CODE</div>
        <div>PROGRAM NAME</div>
        <div>PROGRAM HEAD</div>
      </Table.Header>

      {programs && period && (
        <Table.Body
          data={sortedPrograms}
          render={(program) => (
            <ProgramRow program={program} key={program.id} period={period} />
          )}
        />
      )}
    </Table>
  );
}

export default ProgramsTable;
