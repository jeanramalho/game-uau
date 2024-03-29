import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

        container: {
            width: "100%",
            padding: 15,
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
        },

        titleInput: {
            width: "85%",
            textAlign: "left",
        },

        campoInput: {
            width: "85%",
            height: 35,
            marginTop: 10,
            marginBottom: 20,
            borderColor: "#cecece",
            borderWidth: 2,
            borderRadius: 8,
            padding: 4,
        },

        selectPicker: {
            width: "60%",

        },


        botao: {
            padding: 10,
            backgroundColor: "#00cccc",
            borderRadius: 6, 
            margin: 10,
        },
        textBotao: {
            color: "#fff",
            fontSize: 15,
            fontWeight: "bold",
            textTransform: "uppercase",
        },


})

export default styles

