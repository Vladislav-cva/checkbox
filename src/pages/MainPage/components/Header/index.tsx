import React from 'react'
import { Checkbox } from '../../../../components/Checkbox/Checkbox'
/**
 * Assets
 */
import  './style.css'
/**
 * Expo
 */
export const PageHeader: React.FC<{
        onValueChange: (checked: boolean) => void,
        onClean: () => void,
        onSelectAll: (checked: boolean) => void,
        onChangeClosedPersons: (checked: boolean) => void,
        value: boolean,
        indeterminate: boolean,
        closedPersonsValue: boolean
        closedPersonsIndeterminate: boolean
        }> =
    ({ 
        onValueChange,
        value,
        closedPersonsValue, 
        closedPersonsIndeterminate,
        indeterminate,
        onClean,
        onChangeClosedPersons,
        onSelectAll
    }) => (
        <div className='page-header-wrapper'>
            <div className='page-header-item'>
            <Checkbox
                    label='Choose all opened persons'
                    value={value}
                    indeterminate={indeterminate}
                    onValueChange={onValueChange}
                />
            </div>
            <div className='page-header-item'>
                <Checkbox
                    label='Choose closed persons'
                    value={closedPersonsValue}
                    indeterminate={closedPersonsIndeterminate}
                    onValueChange={onChangeClosedPersons}
                />
            </div>
            <div className='page-header-item'>
            <Checkbox
                    label='Choose all persons'
                    value={closedPersonsValue && value}
                    onValueChange={onSelectAll}
                />
            </div>
            <div className='page-header-item'>
                <button onClick={onClean}>Clean all</button>
            </div>
          </div>
    )
