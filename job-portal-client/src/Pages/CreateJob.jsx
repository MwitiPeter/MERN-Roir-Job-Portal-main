import { useForm } from "react-hook-form"

const CreateJob = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>{ console.log(data);
    }
    
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/* form */}
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* 1st row */}
            <div className="create-job-flex">
                <div className="lg:w-1/2 w-full">
                    <label className="block mb-2 text-lg">Job Title</label>
                    <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className="create-job-input" />
                </div>
                <div className="lg:w-1/2 w-full">
                    <label className="block mb-2 text-lg">Company Name</label>
                    <input type="text" placeholder="Ex: Microsoft" {...register("companyName")} className="create-job-input" />
                </div>
            </div>
            {/* 2nd row */}
            <div className="create-job-flex">
                <div className="lg:w-1/2 w-full">
                    <label className="block mb-2 text-lg">Minimum Salary</label>
                    <input type="text" placeholder="$20k" {...register("minPrice")} className="create-job-input" />
                </div>
                <div className="lg:w-1/2 w-full">
                    <label className="block mb-2 text-lg">Maximum Salary</label>
                    <input type="text" placeholder="$120k" {...register("maxPrice")} className="create-job-input" />
                </div>
            </div>
            

      <input type="submit" className="my-5" />
    </form>
        </div>
    </div>
  )
}

export default CreateJob