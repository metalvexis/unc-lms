import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import FileInput from "../../ui/FileInput";

import { useForm } from "react-hook-form";

import { useAddProgram } from "./useAddProgram";
import Papa from "papaparse";
import { useState } from "react";

function UploadProgramForm({ onCloseModal }) {
  const [parsedData, setParsedData] = useState([]);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
  });
  const { addProgram, isCreating } = useAddProgram();

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setParsedData(results.data);
      },
    });
  };

  function onSubmit() {
    parsedData.map((program) => {
      addProgram(
        { ...program },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    });
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
      width={40}
    >
      <Heading as="h1">Upload and attach files</Heading>

      <FormRow>
        <FileInput
          id="csv"
          accept=".csv"
          type="file"
          disabled={isCreating}
          {...register("csv", {
            required: "This field is required",
          })}
          onChange={changeHandler}
        />
      </FormRow>

      <FormRow>
        <Button
          $variant="secondary"
          size="small"
          type="modal"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button size="small" type="modal">
          Upload new program
        </Button>
      </FormRow>
    </Form>
  );
}

export default UploadProgramForm;
