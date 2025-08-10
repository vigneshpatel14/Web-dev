import { useForm } from "react-hook-form"


function ReactHookForm() {
  const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <>
      <div className="p-5 m-5 justify-start">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="fname">First Name</label>
                <input type="text" id='fname' name='fname' className='border-black border-2 m-2' {...register('fname' , {required:true})}/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" id='email' name='email' className='border-black border-2 m-2' {...register('email' , {required:true})}/>
                {errors.email && <p className="text-red-600">Chudu bey</p>}
            </div>
            <div>
                <label htmlFor="phone">Phono</label>
                <input type="tel" id='phono' name='phono' className='border-black border-2 m-2' {...register('phone')}/>
            </div>
            <button className='bg-red-400 border-2 border-black'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default ReactHookForm
