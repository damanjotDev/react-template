'use client';

import clsx from "clsx";
import { useRef, useState } from "react";
import useOutsideClick from "../../utils/outSideClick";
import { FieldErrors } from "react-hook-form";
import { FaAngleDown, IoClose } from "../../utils/icons"
import { motion } from "../../utils/animation";

// import ReactSelect from 'react-select'

interface Options {
    value: string | number;
    label: string
}

interface MultiSelectProps {
    id: any;
    label: string;
    value?: Options[] | null;
    onChange: (value: Record<string, any>) => void;
    options: Options[];
    disabled?: boolean;
    errors?: FieldErrors;
    className?: string;
    isMulti?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
    id,
    label,
    value,
    onChange,
    options,
    disabled,
    errors,
    className
}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const selectedRef = useRef<any>({}).current;

    useOutsideClick({ ref: dropdownRef, callback: () => setOpen(false) });

    const handleChange = (item: Options) => {

        if (selectedRef[item.value] == undefined) {
            selectedRef[item.value] = item
        }

        else if(selectedRef[item.value]){
            delete selectedRef[item.value];
        }

        const selectedOptions = Object.values(selectedRef);
        setOpen(false)
        onChange(selectedOptions)

    }
   
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
            <div ref={dropdownRef} className="mt-2 relative z-1 border-[2px]">
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
                    {value?.length ?
                        <div key='selectedOption' className="flex items-center gap-1">
                            {value?.map((item) => (
                                <span
                                    key={item?.value}
                                    className="
                                    relative 
                                    py-[2px] 
                                    px-2 
                                    bg-popover
                                    rounded-md 
                                    min-w-[60px]"
                                    onClick={()=>handleChange(item)}>
                                    {item?.label}
                                    <IoClose className="text-primary absolute top-[2px] right-[2px]" size={15}/>
                                </span>))}
                        </div>
                        : <span className="py-[2px]">{'choose option'}</span>
                    }
                    <span
                        className={clsx(`
                        transition-all
                        duration-300    
                    `, open && 'rotate-180')}>
                        <FaAngleDown size={20} className="text-primary" />
                    </span>
                </button>

                {/*Dropdown option*/}

                {open &&
                    <motion.div
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
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}>
                        { 
                         options?.map((item) => !selectedRef[item?.value] && (
                            <div
                                key={item.value}
                                onClick={() => handleChange(item)}
                                className={clsx(`
                                px-2 
                                py-1 
                                flex 
                                items-center 
                                gap-2 
                                transition-all 
                                hover:bg-popover 
                                rounded-sm`)}>
                                <span>{item.label}</span>
                            </div>))
                        }
                    </motion.div>
                }
            </div>
        </div>
    );
}

export default MultiSelect;