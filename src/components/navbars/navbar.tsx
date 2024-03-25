import { clsx } from "clsx";
import { useLocation } from "react-router-dom"
import Input from "../inputs/input";
import { useForm, yup, yupResolver } from "../../utils/react-hook-form";
import { FaCheck, MdOutlineNotificationsNone } from "../../utils/icons"
import AvatarImage from "../../assets/images/man.png";
import { useProfileDropdown } from "../../hooks/useProfileDropdown";

const validation = yup.object().shape({
    title: yup.string()
  })
  
  interface IFormInput {
    title?: string;
  }

const Navbar = () => {
 const profileRoutes = useProfileDropdown();
 const { pathname } = useLocation();

 const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors,
    }
  } = useForm<IFormInput>({
    resolver: yupResolver(validation),
  });


    return (
        <div className="
        fixed
        z-50
        inset-x-0
        ml-20
        lg:ml-80
        flex
        items-center
        py-5
        px-5
        bg-destructive">

                {/* main navbar section */}
                <div 
                className="
                w-full
                flex
                items-center
                sm:justify-between
                justify-center">
                    
                    {/* header section  */}
                    <h1 className="hidden sm:block h3 font-bold">{pathname?.split('/')}</h1>

                    {/* second section */}
                    <div className="
                    flex
                    items-center
                    gap-2">

                        {/* search section */}
                        <Input 
                        id='title' 
                        required={true} 
                        register={register} 
                        errors={errors} 
                        className='h5 bg-card' 
                        placeHolder='Search'/>

                        {/* notification section */}
                        <div className="relative">
                            <MdOutlineNotificationsNone 
                            size={25} 
                            className="
                            text-secondary-foreground"/>
                            <div 
                            className="
                            absolute
                            top-1
                            right-1
                            border-2
                            border-destructive
                             h-[8px]
                             w-[8px]
                             rounded-full
                              bg-rose-500"/>
                        </div>

                        {/* avatar profile section */}

                        <div className="relative group">
                            <img 
                            src={AvatarImage}
                            alt="Avatar"
                            className="
                            h-12
                            w-12
                            rounded-ful
                            "/>

                            {/* dropdown  */}

                            <div className="
                            hidden
                            group-hover:block
                            absolute
                            min-w-[200px]
                            max-w-md
                            right-0
                            top-[100%]
                            py-2
                            z-50
                            ">
                                <div className="
                                flex
                                flex-col
                                gap-2
                                bg-card
                                py-3
                                px-2
                                rounded-lg
                                ">
                                    {profileRoutes?.map(({id,label,navigate,icon: Icon})=>(
                                        <div
                                        key={id}
                                        onClick={navigate}
                                        className={clsx(`
                                            px-2 
                                            py-1 
                                            flex 
                                            items-center 
                                            gap-4 
                                            transition-all 
                                            text-secondary-foreground
                                            hover:text-destructive 
                                            hover:bg-primary
                                            rounded-sm`
                                        )}>
                                        <Icon size={16}/>
                                        <span>{label}</span>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

        </div>
    )
}

export { Navbar }