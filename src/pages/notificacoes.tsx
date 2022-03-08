import Layout from "../components/template/Layout"
import userAppData from "../data/context/hook/userAppData"

export default function Notificacoes() {
  const {alternarTema} = userAppData() 
 
  return (
    // <h1 className="bg-gradient-to-r from-green-400 to-blue-500">
    //   Hello world!
    // </h1>

    <Layout titulo="Notificações" subtitulo="Aqui você irá gerenciar suas notificações">
      
      <h3></h3>
      {/* <button onClick={alternarTema}>AlternarTema</button> */}
    </Layout>

  )
}
