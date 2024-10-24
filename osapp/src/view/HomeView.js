import { StyleSheet, Text, View } from "react-native"



export default HomeView = ()=>{

    return(
        <View style={estilo.container}>

            <Text>HOME</Text>

        </View>        
    )

}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})