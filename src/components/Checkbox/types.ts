import { FieldValueProps, FieldProps } from '../../types'
/**
 * Expo
 */
export type TCheckboxProps = FieldValueProps<boolean> & FieldProps &  {
    label?: string;
    indeterminate?: boolean 
}