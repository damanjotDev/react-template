
import clsx from "clsx";
import { 
  FieldErrors, 
  FieldValues, 
  UseFormRegister 
} from "react-hook-form";

interface InputProps {
  placeHolder?:string;
  className?:string;
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
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
      <label 
        htmlFor={id} 
        className={clsx(`
        block 
        h7`,
        className)}
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeHolder}
          {...register(id, { required })}
          className={clsx(`
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            shadow-sm 
            ring-1 
            ring-inset 
            ring-primary
            placeholder:primary-foreground 
            focus:ring-2 
            focus:ring-inset
            h7
            p-2
            `,
            errors[id] ?'focus:ring-rose-500':'  focus:ring-sky-600 ',
            disabled && 'opacity-50 cursor-default',
            className
          )}
        />
      </div>
    </div>
   );
}
 
export default Input;