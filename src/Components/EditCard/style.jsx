import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

        container: {
            width: "100%",
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: 8,
            backgroundColor: "#999",
        },

        gamerName: {
            width: "30%",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            marginRight: 3,
            textAlign: "center",
        },

        intupPoint: {
            width: 50,
            height: 30,
            backgroundColor: "#fff",
            borderRadius: 8,
            textAlign: "center",
        },

        buttonStyle: {
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: 8,
            padding: 5,
        },

        buttonContainer: {
            width: "20%",
            flexDirection: "row",
            justifyContent: "space-between",
        },

        someIcon:{
            margin: 3,
        },

        pointsSpace: {
            marginRight: 3
        },

})

export default styles
