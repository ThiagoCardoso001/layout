
const URL_OS = 'http://34.200.203.33:3000'


const osList = async ()=>{
    const response = await fetch(`{URL_OS}/os`)
    const lista = await response.json()
    return lista
}

export {osList}
