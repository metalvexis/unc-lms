import Heading from "../../ui/Heading";
import { useUser } from "../authentication/useUser";
import { usePeriod } from "./usePeriod";

function ProgramsHeader() {
  const { user } = useUser();
  const { period } = usePeriod();

  if (!user || !period) return;

  let schoolYear = period[0] && period[0].school_yr;
  let semester = period[0] && period[0].sem;

  return (
    <>
      <Heading as="h1">PROGRAM MANAGEMENT</Heading>
      <Heading as="h2">
        {user[0].faculty.mother_dept === "CS"
          ? "College of Computer Studies"
          : ""}
        <br />
        {schoolYear === "2425" && semester === 1 ? "1st Sem S/Y 2024-2025" : ""}
      </Heading>
    </>
  );
}

export default ProgramsHeader;
