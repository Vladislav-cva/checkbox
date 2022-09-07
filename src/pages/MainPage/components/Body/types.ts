/**
 * Types
 */
import { TPerson } from "../../../../types";
/**
 * Expo
 */
export type Props = {
    person: TPerson
    isChecked: boolean;
    isDisabled: boolean;
    onCheck: (checked: boolean, id: string, status: string) => void
}