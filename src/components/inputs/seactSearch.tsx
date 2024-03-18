'use client';

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../utils/outSideClick";
import { FieldErrors } from "react-hook-form";
import { FaAngleDown, FaCheck } from "../../utils/icons"
import { motion } from "../../utils/animation";
// import ReactSelect from 'react-select'

interface Options {
  value: string | number;
  label: string
}

interface SelectProps {
  id: any;
  label: string;
  value?: Options | null;
  onChange: (value: Record<string, any>) => void;
  options: Options[];
  disabled?: boolean;
  errors?: FieldErrors;
  className?: string
}

const SelectSearch: React.FC<SelectProps> = ({
  id,
  label,
  value,
  onChange,
  options : OPTIONS ,
  disabled,
  errors,
  className
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<any>(OPTIONS)
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick({ ref: dropdownRef, callback: () => setOpen(false) });

  const handleClick = (item: Options) => {
    setOpen(false)
    onChange(item)
  }

  const handleSearch = (title: string) => {
    
    const newOptions = OPTIONS?.filter((item: Options)=> item?.label.includes(title));
    setOptions(newOptions)
  }

  useEffect(()=>{
    setOptions(OPTIONS)
  },[open])
  return (
    <div className="z-[100]">
      <label
        className="
          block 
          h6
        "
      >
        {label}
      </label>
      <div ref={dropdownRef} className="mt-2 relative z-1">
        <button
          id={id}
          onClick={() => setOpen(true)}
          className={clsx(`
            flex
            items-center
            justify-between
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
            h6
            p-2
            focus:ring-sky-600
            `,
            errors?.[id] ? 'focus:ring-rose-500' : '  focus:ring-sky-600 ',
            disabled && 'opacity-50 cursor-default',
            className
          )}
        >
          <span>{value?.label || 'choose option'}</span>
          <span
            className={clsx(`
            transition-all
            duration-300
          `, open && 'rotate-180')}>
            <FaAngleDown size={20} className="text-primary" />
          </span>
        </button>

        {/*Dropdown option*/}

        {open && <motion.div
          className="
          overflow-auto
          max-h-[250px]
          border-[1px] 
          border-primary
          absolute
          z-20
          inset-x-0
          flex
          flex-col
          gap-1
          rounded-md
          top-[110%]
          p-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 0.3 }}>
          <input
          id={id}
          type={'text'}
          autoComplete={id}
          disabled={disabled}
          placeholder={'seacrh'}
          onChange={(e)=> handleSearch(e.target.value)}
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
            focus:ring-2 
            focus:ring-inset
            focus:ring-primary
            h7
            p-1
            px-2
            `
          )}
        />
          {options?.map((item: Options) => (
            <div
              key={item.value}
              onClick={() => handleClick(item)}
              className={clsx(`
                px-2 
                py-1 
                flex 
                items-center 
                gap-2 
                transition-all 
                hover:bg-popover 
                rounded-sm`,
                item.value === value?.value && "bg-popover"
              )}>
              {item.value === value?.value && <FaCheck size={16} className="text-primary" />}
              <span>{item.label}</span>
            </div>))}
        </motion.div>}
      </div>
    </div>
  );
}

export default SelectSearch;