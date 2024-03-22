import { clsx } from "clsx";
import LogoImage from "../../assets/images/Logo.png"
import { useSidebarRoutes } from "../../hooks/useSidebarRoutes"
const Sidebar = () => {
 const sideBarRoutes = useSidebarRoutes();

    return (
        <div className="
        fixed
        inset-y-0
        flex
        flex-col
        justify-between
        py-5
        px-5
        bg-destructive
        lg:w-80
        w-20">

            <div className="
            w-full
            flex
            flex-col
            gap-10">

                {/* Logo part */}
                <div className="
                flex
                items-center
                gap-2
                ">
                        <img src={LogoImage} className="w-12 h-12" alt="logo" />
                   
                    <div className="hidden w-auto mt-[-4px] lg:block">
                        <p className="text-destructive-foreground h4 font-[400]">
                            Vytals
                        </p>
                        <p className="text-destructive-foreground tracking-tight text-[14px]">Admin Template</p>
                    </div>
                </div>

                {/* Sidebar Navigation part */}

                <div className="
                flex 
                flex-col 
                justify-center
                gap-3">
                    
                    {/* Sidebar Item part */}
                    {sideBarRoutes?.map(({id,navigate,active,icon: Icon, label})=>(
                        <div 
                        key={id}
                        onClick={navigate}
                        className={clsx(`
                        w-full
                        flex
                        items-center
                        gap-3
                        py-2
                        px-3
                        text-secondary-foreground
                        tarnsition-all
                        hover:bg-primary 
                        hover:text-accent-foreground
                        rounded-lg`,
                        active && 'bg-primary text-white')}>
                            <Icon size={18}/>
                            <p className="hidden lg:block leading-7 text-sm font-semibold">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export { Sidebar }