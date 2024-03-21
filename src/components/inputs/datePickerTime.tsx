import React, { useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import "react-day-picker/dist/style.css";
import { motion } from "../../utils/animation";
import clsx from "clsx";
import { 
  FieldErrors
} from "react-hook-form";
import useOutsideClick from '../../utils/outSideClick';
import { format, setMinutes, setHours } from '../../utils/date-fns';
import { enUS,enNZ,enZA } from 'date-fns/locale';

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

const DatePickerTime: React.FC<DatePickerProps> = ({
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
  const [timeValue, setTimeValue] = React.useState<string>('00:00');

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick({ ref: dropdownRef, callback: () => setOpen(false) });


  const handleChange = (res: Date | undefined) => {
    if(onChange) onChange(res)
    setSelectedDay(res)
    setOpen(false)
  }

  const handleTime = (res:string) => {
   
  }

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
      <div className="mt-1 relative z-1">
        <input
          id={id}
          type={type}
          required={required}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeHolder}
          onClick={()=>setOpen(true)}
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
            p-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.3 }}>
            <DayPicker 
            locale={enZA}
            mode='single' 
            captionLayout="dropdown-buttons" 
            fromYear={2015} 
            toYear={2025} 
            onSelect={(res)=>handleChange(res)} 
            selected={selectedDay}
            footer={ 
            <input
             type="time"
             value={timeValue}
             onChange={(res)=>handleTime(res.target.value)}
            placeholder='pick a time'
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
              )}
            />}/>
          </motion.div>
        }
      </div>
    </div>
   );
}
 
export default DatePickerTime;

