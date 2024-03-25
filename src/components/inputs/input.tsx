
import clsx from "clsx";
import { 
  FieldErrors, 
  FieldValues, 
  UseFormRegister 
} from "react-hook-form";

interface InputProps {
  placeHolder?:string;
  className?:string;
  label?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<any>,
  errors: FieldErrors
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeHolder,
  label,
  id,
  register,
  required,
  errors,
  type = 'text',
  disabled,
  className
}) => {
  return ( 
    <div>
     {label && 
      <label 
      htmlFor={id} 
      className={clsx(`
      block 
      h7`)}
    >
      {label}
    </label>}
      <div className="mt-1">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeHolder}
          {...register(id, { required })}
          className={clsx(`
            bg-background
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            shadow-sm 
            ring-1  
            ring-primary
            placeholder-secondary-foreground
            placeholder:text-[16px]
            focus:ring-2 
            focus:ring-inset
            h7
            p-2
            ${className}
            `,
            errors[id] ?'focus:ring-rose-500':'focus:ring-primary ',
            disabled && 'opacity-50 cursor-default',
          )}
        />
      </div>
    </div>
   );
}
 
export default Input;