import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const CreateJob = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div
      className="max-w-2*1 container mx-auto
     *1:px-24 px-2"
    >
      {/* form */}
      <div className="bg-[#FAFAFA] py-10px-4 1g:px-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <input defaultValue="test" {...register("example")} />

          <input {...register("exampleRequired", { required: true })} />
         
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
