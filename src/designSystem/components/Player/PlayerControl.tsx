import { Pressable } from "react-native";
import Icon from "../Icons/Icons";
import { IControl } from "../../../utils/components.types";


export function Control({onPress, name, size=30}: IControl) {
    return (
        <Pressable onPress={onPress}>
            <Icon name={name} size={size} />
        </Pressable>
    )
};