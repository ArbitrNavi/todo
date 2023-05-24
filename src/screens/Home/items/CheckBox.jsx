import React from 'react';
import {BsCheck} from "react-icons/all.js";
import cn from "classname";

const CheckBox = ({isCompleted}) => {
    return (
        <div className={cn("border-2 rounded-lg border-pink-500 w-6 h-6 mr-3 flex items-center justify-center", {
            'bg-pink-500': isCompleted
        })}>
            {
                isCompleted && (
                    <BsCheck size={24} className="text-gray-900"/>
                )
            }
        </div>
    );
};

export default CheckBox;