import { Picker } from "@react-native-picker/picker"
import { useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { FAB, RadioButton, TextInput } from "react-native-paper"



export default OsNewView = ()=>{

    const [os, setOS] = useState(
    {        
        descricao: "",
        tipoOs: "Garantia",
        tipoServico: "",
        detalhes: "",
        cliente: ""
        // "status": "ABERTA",
        // "dataAbertura": "2024-10-09T00:00:00.000Z",
        // "dataEncerramento": null,
        // atendente: "Pedrin",
    })    
    const saveOS = ()=>{
        alert("aguarde!!!")
        console.log(os)       

    }

    return(
        <ScrollView contentContainerStyle={{
            flexGrow: 1
        }} >
        <View style={estilo.container}>

            <Text style={estilo.titulo} >NOVA OS</Text>

            <TextInput style={estilo.campo}
                label="descrição"
                placeholder="informe os dados da OS"
                value={os.descricao}
                onChangeText={ (t)=> setOS({ ...os , descricao: t})  }
                />

            <Text style={{
                paddingLeft: 15,
                paddingTop:15,
                fontSize: 18,
            }} >
                    Tipo de OS
                </Text>

            <View style={{
                // flex: 1,
                flexDirection:"row",
                width:'100%',
                // backgroundColor: '#ab0',
                padding: 10,
                
            }}>
            <RadioButton.Group             
            value={os.tipoOs}
            onValueChange={ (t)=> setOS({ ...os , tipoOs: t})  }
            >
            <View style={{
                // flex: 1,
                flexDirection:"row",
            }}>
                <Text style={{
                    paddingLeft: 15,
                    paddingTop:8,
                    fontSize: 18,
                }}>Garantia</Text>
                <RadioButton value="Garantia" />
            </View>
            <View style={{
                // flex: 1,
                flexDirection:"row",
            }}>
                <Text style={{
                    paddingLeft: 15,
                    paddingTop:8,
                    fontSize: 18,
                }}>Orçamento</Text>
                <RadioButton value="Orçamento" />
            </View>
         
            </RadioButton.Group>
            </View>

            <Text style={{
                paddingLeft: 15,
                paddingTop:15,
                fontSize: 18,
            }} >
                    Tipo de Serviço
                </Text>
            <Picker  style={estilo.campo}            
            selectedValue={os.tipoServico}
            onValueChange={ (itemValue, itemIndex)=> setOS({ ...os , tipoServico: itemValue})  }
            >
                <Picker.Item label="Troca Pneu" value="Troca Pneu" />
                <Picker.Item label="Alinhamento" value="Alinhamento" />
                <Picker.Item label="Mecânica" value="Mecânica" />
                <Picker.Item label="Eletrica" value="Eletrica" />
                <Picker.Item label="Escapamento" value="Escapamento" />
                <Picker.Item label="Freio" value="Freio" />
            </Picker>


            <TextInput style={estilo.campo1}
            multiline={true}
            numberOfLines={3}
                label="problema"
                placeholder="informe o problema ocorrido"                
                value={os.detalhes}
                onChangeText={ (t)=> setOS({ ...os , detalhes: t})  }
                />

            <TextInput style={estilo.campo}
                    label="Cliente"
                    placeholder="Nome do Cliente"      
                    value={os.cliente}
                    onChangeText={ (t)=> setOS({ ...os , cliente: t})  }
                    />

            {/* <View style={
                {flexGrow: 1,}
            }>
            </View> */}



        </View>  

            <FAB
                    icon="plus"
                    label="Salvar"
                    style={estilo.fab}
                    onPress={ saveOS }
                />
        </ScrollView>      
    )

}

const estilo = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 10,
        right: 0,
        bottom: 0,
      },
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      campo:{
        width: '100%',
        // height: 22,
        fontSize: 18,
      },
      campo1:{
        width: '100%',
        // height: 66,
        fontSize: 18,
      },
      titulo:{
        width: '100%',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})