import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        paddingTop: 10,
        alignItems: "center",
    },

    rankings: {
        width: "100%",
        height: "80%",
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    title: {
        width: "100%",
        fontSize: 30,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
    },

    rankingContainer:{
        width: "90%",
        padding: 10,
        paddingTop:10,
        marginTop: 10,
        backgroundColor: "#cecece",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },

    scrollContainer: {
        width: "100%",
    },

 
})

export default styles