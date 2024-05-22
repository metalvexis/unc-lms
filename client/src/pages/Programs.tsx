import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ProgramsTable from "../features/programs/ProgramsTable";
import styled from "styled-components";
import SortBy from "../ui/SortBy";
import ProgramsHeader from "../features/programs/ProgramsHeader";
import ProgramsButtons from "../features/programs/ProgramsButtons";

const ProgramOfferingsLayout = styled.div`
  border: 1px solid var(--color-gray-1);
  padding: 5rem 5rem;
  margin-bottom: 20rem;
`;

const ProgramsLine = styled.hr`
  border: 0.5px solid var(--color-gray-0);
  width: 100%;
`;

const Programs: React.FC = () => {
  return (
    <>
      <Row type="horizontal">
        <ProgramsHeader />
      </Row>
      <Row type="horizontal">
        <ProgramsLine />
      </Row>
      <ProgramOfferingsLayout>
        <Row type="horizontal">
          <Heading as="h1">Program Offerings</Heading>
        </Row>
        <Row type="horizontal">
          <ProgramsTable />
        </Row>
        <Row type="horizontal">
          <SortBy
            options={[
              { value: "programCode-asc", label: "Program Code (A-Z)" },
              { value: "programCode-desc", label: "Program Code (Z-A)" },
            ]}
          />
          <ProgramsButtons />
        </Row>
      </ProgramOfferingsLayout>
    </>
  );
};

export default Programs;
