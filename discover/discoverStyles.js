import { StyleSheet } from "react-native";

export default StyleSheet.create({
    contnaire: {
        padding:20,
        // backgroundColor : "#000",
        flex: 1,
    },

    navCont: {
        // backgroundColor: "red",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginVertical: 10
    },

    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25
    },

    Title: {
        fontSize: 40,
        color: "#1B1B1B",
        fontWeight: "500"
    },

    searchBar: {
        marginVertical: 20,
        borderColor: "#000",
        borderWidth: 1,
        backgroundColor: "#FFF",
        opacity: 0.3
    },

    itemCategory: {
        marginHorizontal: 10,
        fontSize: 20,
        marginBottom: 20
    },

    product: {
        justifyContent: "flex-start",
        marginVertical: 10
    },

    productCard : {
        flex: 1,
        marginHorizontal: 10
        // justifyContent: "flex-start",
        
    },

    cardImage: {
        height: 180,
        width: 130,
        borderRadius: 20,
        marginVertical: 10
    },

    itemPopular: {
        flex:1, 
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        backgroundColor: "#408673",
        borderRadius: 20,
    },

    popular : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },

    imagePopular: {
        height: 100,
        width: 100,
        borderRadius: 20
    }
})