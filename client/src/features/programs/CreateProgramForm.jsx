import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useAddProgram } from "./useAddProgram";

import { useForm } from "react-hook-form";
import Heading from "../../ui/Heading";

function CreateProgramForm({ onCloseModal }) {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const { addProgram, isCreating } = useAddProgram();

  function onSubmit(data) {
    addProgram(
      { ...data },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError() {}

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
      width={40}
    >
      <Heading as="h1">Add Program</Heading>
      <FormRow label="Program Code" error={errors?.programCode?.message}>
        <Input
          type="text"
          id="programCode"
          $modal="true"
          disabled={isCreating}
          {...register("programCode", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Program Name" error={errors?.programName?.message}>
        <Input
          type="text"
          id="programName"
          $modal="true"
          disabled={isCreating}
          {...register("programName", {
            required: "This field is required",
          })}
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
        <Button size="small" disabled={isCreating} type="modal">
          Save Program
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateProgramForm;
