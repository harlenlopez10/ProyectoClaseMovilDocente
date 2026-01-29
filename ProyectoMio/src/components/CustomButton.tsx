import { View, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
    title: string;
    onClick: () => void;
}

export default function CustomButton ({
    title,
    onClick
}: CustomButtonProps){

    return(
        <TouchableOpacity
        onPress={onClick}
        >
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
