import React, { useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import "react-day-picker/dist/style.css";
import { motion } from "../../utils/animation";
import clsx from "clsx";
import { 
  FieldErrors
} from "react-hook-form";
import useOutsideClick from '../../utils/outSideClick';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

interface DatePickerProps {
  placeHolder?:string;
  className?:string;
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  errors: FieldErrors
  disabled?: boolean;
  value?: Date;
  onChange?: (value: any) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  placeHolder,
  label,
  id,
  required,
  errors,
  type = 'text',
  disabled,
  value,
  className,
  onChange
}) => {
  const defaultDate: Date = value || new Date()
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(defaultDate);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useOutsideClick({ ref: dropdownRef, callback: () => setOpen(false) });

  const handleChange = (res: Date | undefined) => {
    if(onChange) onChange(res)
    setSelectedDay(res)
    setOpen(false)
  }

  const handleClick = () => {
    setOpen(true)
    if (inputRef.current) {
      inputRef.current.type = 'text';
    }
  }
  return ( 
    <div>
      <label 
        htmlFor={id} 
        className={clsx(`
        block 
        h7`)}
      >
        {label}
      </label>
      <div className="mt-1 relative z-1">
        <input
          ref={inputRef}
          id={id}
          type={type}
          required={required}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeHolder}
          onClick={()=>handleClick()}
          value={selectedDay ? format(selectedDay, "yyyy-MM-dd").toString():""}
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
            errors[id] ? 'focus:ring-rose-500':' focus:ring-sky-600',
            disabled && 'opacity-50 cursor-default',
            className
          )}
        />
        {open && 
          <motion.div
            ref={dropdownRef}
            className="
            border-[1px] 
            border-primary
            absolute
            z-20
            rounded-md
            top-[110%]
            bg-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.3 }}>
            <DayPicker 
            locale={enUS}
            mode='single' 
            captionLayout="dropdown-buttons" 
            fromYear={2015} 
            toYear={2025} 
            onSelect={(res)=>handleChange(res)} 
            selected={selectedDay}/>
          </motion.div>
        }
      </div>
    </div>
   );
}
 
export default DatePicker;

