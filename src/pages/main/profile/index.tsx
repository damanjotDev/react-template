import AvatarImage from "../../../assets/images/man.png";

const Profile = () => {
    return(
        <div className="w-full h-full pt-[84px] pl-80">
            <div className="
            w-full
            py-5
            px-3
            flex
            flex-col
            justify-center
            ">
                {/* avatar section */}
                <div className="
                flex
                itmes-center
                justify-center
                bg-destructive
                rounded-lg
                p-5">
                   <div className="
                   flex
                   flex-col
                   items-center
                   justify-between
                   gap-4">
                           <img 
                            src={AvatarImage}
                            alt="Avatar"
                            className="
                            h-[200px]
                            w-[200px]
                            rounded-full
                            "/>

                            <h1 
                            className="h2 
                            text-secondary-foreground
                            font-semibold">Damanjot Singh</h1>
                   </div>
                </div>

                {/* admin infromation */}
                <div className='w-full  flex flex-col items-center justify-center gap-5'>
                    <h1 className='h1 text-primary'>User Infromation</h1>

                    <form className='w-full flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
                        <Input label='Email' id='email' required={true} register={register} errors={errors} className='h5' placeHolder='Your email' />
                        <Input label='Password' id='password' required={true} register={register} errors={errors} className='h5' placeHolder='Your email' />
                        <Button type="submit" id='button' className='btn-primary'>Login</Button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export {Profile}