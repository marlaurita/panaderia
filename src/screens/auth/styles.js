import { StyleSheet } from "react-native";
import {colors } from "../../constants/themes/colors"

export const styles = StyleSheet.create({
    containerKeyboard: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15, 
        borderColor: colors.primary,
        borderWidth: 1, 
        borderRadius: 10,
        backgroundColor:colors.white
    },
    title: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center'
    },
    input: {
        height: 40,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        marginBottom: 10

    },
    label: {
        fontSize: 14,
        marginVertical: 5
    },
    prompt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    promptMessage: {
        fontSize:14,
        color: colors.text,
        marginRight: 15,
    },
    propmtButton: {
        fontSize: 14,
        color: colors.primary,
        textAlign: 'center'
    }
});