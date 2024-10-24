import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { ActivityIndicator, Avatar, Badge, Chip } from "react-native-paper"
import { osList } from "../service/OsService"



export default OsListView = ()=>{

    const [loading, setLoading] = useState(true)
    const [oss, setOss] = useState()

    useEffect(()=>{
            try {
                const getDados = async()=>{
                    const lista = await osList()
                    const os = []
                    lista.array.forEach(o => {
                        os.push({
                            id: o.id,
                            descricao: o.tipoServico,
                            cliente: o.cliente,
                            status: o.status,
                        })
                    });
                    setOss(os)
                    setLoading(false)
                } 
            } catch (e) {
                alert(`Erro no serviço :: ${e}`)
            }

            getDados()

    },[])

    // const [oss, setOss] = useState( [
    //     {id: 1, descricao: "troca pneu", preco: 0},
    //     {id: 2, descricao: "alinhamento", preco: 50.00},
    //     {id: 3, descricao: "trocar luz de freio", preco: 80.00},
    //     {id: 4, descricao: "trocar pastilha de freio", preco: 350.00},
    //     {id: 5, descricao: "limpeza ar", preco: 0.00},
    //     {id: 6, descricao: "troca de filtros e óleo", preco: 350.00},
    //     {id: 7, descricao: "Amortecedor", preco: 1850.00},
    //     {id: 8, descricao: "trocar parafuseta", preco: 1300.00},
    //     {id: 9, descricao: "trocar óleo", preco: 450.00},
    //     {id: 10, descricao: "regular freio", preco: 100.00},
    // ])

    return(
        <View style={estilo.container}>

        {loading &&
                <ActivityIndicator animating={true} size="large" />
        }
        {!loading &&
            <View>
                    <Text>LISTAGEM DE OS</Text>
                    <FlatList 
                    style={{width: '100%'}}
                    data={oss}
                    keyExtractor={ (item)=> item.id}
                    renderItem={ ({item})=>{
                        return(
                            <View 
                            style={estilo.linha} >

                            <Avatar.Icon 
                            style={estilo.linhaIcon}
                            size={30} 
                            icon="folder" />

                                <Text 
                            style={estilo.linhaTexto}>
                                    {item.descricao}
                                </Text>
                                { item.preco == 0 &&
                                <Chip icon="information" >Orçamento</Chip>
                                }

                            </View>    
                        )
                        }
                    }
                    >
                    </FlatList>
            </View>
        }
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
      linha:{
        // height:32,
        flex: 1,
        flexDirection: 'row',
        padding:15,
        alignItems:"baseline"
      },
      linhaTexto:{
        fontSize:28,
        paddingLeft:12,
        paddingRight:12,
      },
      linhaIcon:{
        marginTop:18,
      }
})