import { Navbar } from "./components/navbar/Navbar"
import { ColorInputs } from "./components/colorInputs/ColorInputs"
import { Content } from "./components/content/Content"

import './VivaColor.css'
import { Layout } from "./components/Layout/Layout"
import { ColorProvider } from "./context/ColorProvider"



const VivaColorApp= () => {

  return (
    <>
      <Navbar/>
      <ColorProvider>
        <Layout>
          <ColorInputs/>
          <Content/>
        </Layout>
      </ColorProvider>

    </>
  )
}

export {VivaColorApp}
