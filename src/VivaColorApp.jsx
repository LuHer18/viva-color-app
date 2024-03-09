import { Navbar } from "./components/navbar/Navbar"
import { ColorInputs } from "./components/colorInputs/ColorInputs"
import { Content } from "./components/content/Content"

import './VivaColor.css'
import { Layout } from "./components/Layout/Layout"



const VivaColorApp= () => {

  return (
    <>
      <Navbar/>
      <Layout>
        <ColorInputs/>
        <Content/>
      </Layout>

    </>
  )
}

export {VivaColorApp}
