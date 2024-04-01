import { ImAttachment } from "../../../utils/icons";
import AvatarImage from "../../../assets/images/man.png";
import ProfileCoverImage from "../../../assets/images/profile-cover.jpg";
import ProfileDummyImage from "../../../assets/images/profileDummy.jpg";
import { FieldValues, SubmitHandler, useForm, yupResolver } from '../../../utils/react-hook-form';
import Input from "../../../components/inputs/input";
import DatePicker from "../../../components/inputs/datePicker";
import Select from "../../../components/inputs/select";
import { Button } from "../../../components/buttons/button";

const Profile = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {
          errors,
        }
      } = useForm<any>({
        
      });

    return(
        <div className="
        w-full 
        h-screen
        pt-[88px] 
        lg:pl-80
        pl-20">
            <div className="
            w-full
            h-auto
            py-5
            px-5
            flex
            flex-col
            lg:flex-row
            gap-5
            ">
                {/* Form Section */}

               <div className="
               h-full
               flex-1
               flex
               flex-col
               gap-5
               bg-destructive
               rounded-lg
               p-5">

                {/* General Infromation */}

                <div className="
                flex
                flex-col
                gap-3">

                    <h1 className="h4 font-medium">General Infromation</h1>
                    <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    xl:gap-x-10
                    gap-4
                    ">
                        <Input 
                        label='First Name' 
                        id='first_name' 
                        required={true} 
                        register={register} 
                        errors={errors} 
                        className='h5 ring-0 focus:ring-0 bg-card xl:p-3' 
                        placeHolder='Your first name' />

                        <Input 
                        label='Last Name' 
                        id='last_name' 
                        required={true} 
                        register={register} 
                        errors={errors} 
                        className='h5 ring-0 focus:ring-0 bg-card xl:p-3' 
                        placeHolder='Your last name' />

                        <DatePicker 
                        label='Birthday' 
                        id='dob' 
                        type='date' 
                        errors={errors} 
                        value={new Date()} 
                        onChange = {(res)=>setValue('select',res)}
                        className="ring-0 focus:ring-0 bg-card xl:p-3"/>

                        <Select 
                        label='Select'
                        id='gender' 
                        value={null} 
                        onChange={(res: any)=>console.log(res)} 
                        options={[{value:1,label:'hi'},{value:2,label:'hi12'},{value:3,label:'hi3'},{value:4,label:'hi4'}]}
                        className="ring-0 focus:ring-0 bg-card xl:p-3"/>

                        <Input 
                        label='Email' 
                        id='email' 
                        required={true} 
                        register={register} 
                        errors={errors} 
                        className='h5 ring-0 focus:ring-0 bg-card xl:p-3' 
                        placeHolder='Your email' />

                        <Input 
                        label='Phone' 
                        id='phone' 
                        required={true} 
                        register={register} 
                        errors={errors} 
                        className='h5 ring-0 focus:ring-0 bg-card xl:p-3' 
                        placeHolder='Your phone number' />
                    </div>
                </div>

                  {/* Address Infromation */}

                  <div className="
                    flex
                    flex-col
                    gap-3">

                    <h1 className="h4 font-medium">Address</h1>
                    <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    xl:gap-x-10
                    gap-4
                    ">
                        <Input 
                        label='Address' 
                        id='address' 
                        required={true} 
                        register={register} 
                        errors={errors} 
                        className='h5 ring-0 focus:ring-0 bg-card xl:p-3' 
                        placeHolder='Your address' />

                        <Input 
                        label='No' 
                        id='last_name' 
                        required={true} 
                        register={register} 
                        errors={errors} 
                        className='h5 ring-0 focus:ring-0 bg-card xl:p-3' 
                        placeHolder='Your No' />

                        <Select 
                        label='Select State'
                        id='state' 
                        value={null} 
                        onChange={(res: any)=>console.log(res)} 
                        options={[{value:1,label:'hi'},{value:2,label:'hi12'},{value:3,label:'hi3'},{value:4,label:'hi4'}]}
                        className="ring-0 focus:ring-0 bg-card xl:p-3"/>

                        <Input 
                        label='ZIP' 
                        id='zip' 
                        required={true} 
                        register={register} 
                        errors={errors} 
                        className='h5 ring-0 focus:ring-0 bg-card xl:p-3' 
                        placeHolder='Your ZIP' />

                        <div className="lg:col-span-2 xl:col-span-1">
                            <Input 
                            label='Phone' 
                            id='phone' 
                            required={true} 
                            register={register} 
                            errors={errors} 
                            className='h5 ring-0 focus:ring-0 bg-card xl:p-3' 
                            placeHolder='Your phone number' />
                        </div>
                    </div>
                </div>

                  { /* Action Button */ }
                <div className="w-[100px] mt-5">
                            <Button 
                            type="button" 
                            id='button' 
                            className='btn-primary xl:p-3'>
                                Save All
                            </Button>
                 </div>
               </div>

                {/* avatar section */}
                <div className="
                xl:w-[30%]
                lg:w-[40%]
                w-full
                h-full
                flex
                flex-col
                gap-4">
                    <div className="
                    relative
                    flex
                    flex-col
                    bg-destructive
                    rounded-lg
                    h-[400px]
                    w-full">
                        <div className="
                        absolute
                        z-20
                        inset-x-0
                        h-[40%]
                        bg-cover
                        bg-center
                        rounded-t-lg"
                        style={{backgroundImage: `url(${ProfileCoverImage})`}}/>

                        <div className="
                        absolute
                        top-[25%]
                        left-1/2
                        transform
                        -translate-x-1/2
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-1
                        z-30">
                            <img 
                            src={AvatarImage} 
                            className="
                            w-[90px] 
                            h-[90px]
                            rounded-full"/>

                            <p className="
                            h4
                            font-semibold">
                                Neil sims
                            </p>

                            <p className="
                            h7
                            text-center
                            font-normal
                            tracking-tight
                            leading-5
                            w-[200px]">
                                Senior Software Engineer New York, USA
                            </p>
                            
                        </div>

                        <div className="
                        absolute
                        bottom-0
                        inset-x-0
                        h-[74px]
                        xl:h-[120px]
                        px-3
                        pb-3
                        ">
                            <p className="
                                h-full
                                h7
                                text-sm
                                tracking-tight
                                leading-4
                                overflow-auto
                                break-all">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                        </div>
                    </div>

                    <div className="
                    flex
                    flex-col
                    justify-cdnter
                    bg-destructive
                    rounded-lg
                    p-3
                    gap-4
                    ">
                        <h1 className="
                        font-semibold">Select profile photo</h1>

                        <div className="
                        flex
                        items-center
                        gap-3">
                            <img 
                            src={ProfileDummyImage} 
                            className="
                            w-14
                            h-14
                            rounded-lg"/>

                            <div className="
                            flex
                            items-center
                            gap-3">
                                <ImAttachment size={20}/>

                                <div className="
                                flex
                                flex-col
                                justify-center
                                gap--1">
                                    <p className="
                                    h7
                                    font-medium">Choose Image</p>
                                     <p className="
                                     h7
                                     text-xs">JPG, GIF or PNG, Max size of 800k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    )
}

export {Profile}