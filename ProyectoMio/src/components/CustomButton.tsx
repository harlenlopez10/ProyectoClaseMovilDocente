import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomButtonProps {
    title: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
}

export default function CustomButton ({
    title,
    onClick,
    variant = "primary"
}: CustomButtonProps){
    const styles = getStyles(variant);
    return(
        <TouchableOpacity
        onPress={onClick}
        style={styles.container}>
            <Text
                style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const getStyles = (variant: 'primary' | 'secondary') =>
    StyleSheet.create ({
    container: {
        backgroundColor: 
            variant === "primary" ? "#1349cf":"white" ,
        width: "80%",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#bd3112",
        paddingVertical: 15,
        alignItems: "center"
  },
  text: {
    color: 
        variant === "primary" ? "white" : "black",
    fontSize: 18,
    fontWeight: "500"
  }
});

/*const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsWrapper: {
    backgroundColor: 'blue',
    marginTop: 15,

    width: "80%",
    height: "25%",

    alignItems: 'center',
    justifyContent: "space-around",
  }
});*/