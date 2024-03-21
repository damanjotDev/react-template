
interface ButtonProps {
    id?: string,
    children: string | React.ReactNode,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type?: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({ id, children, className , onClick, type='button'}) => {

    return <button 
                id={id} 
                type={type}
                onClick={onClick}
                className={`
                w-full 
                flex 
                items-center 
                justify-center 
                ${className?className:null}`}>
                {children}
           </button>
}

export { Button }