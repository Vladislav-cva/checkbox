import React, { useCallback } from 'react';
/**
 * Components
 */
 import { Checkbox as CheckboxUUI} from 'antd' ;
/**
 * Assets
 */
import './style.css'
import 'antd/dist/antd.css';
/**
 * Types
 */
 import { TCheckboxProps } from './types'
 import type { CheckboxChangeEvent } from 'antd/es/checkbox';
/**
 * Expo
 */
export const Checkbox: React.FC<TCheckboxProps>  = ({
        label,
        onValueChange, 
        value = false,
        isDisabled,
        indeterminate,
    })=> {     
        const handleValueChange = useCallback(
            (e: CheckboxChangeEvent) => {
                if (onValueChange) onValueChange(e.target.checked);
            },
            [onValueChange]
        );

   return (
    <CheckboxUUI 
        indeterminate={indeterminate} 
        onChange={handleValueChange} 
        checked={value}
        disabled={isDisabled}
    >
        {label}
    </CheckboxUUI>
)}