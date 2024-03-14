import { Navbar } from "./components/navbar/Navbar"
import { ColorInputs } from "./components/colorInputs/ColorInputs"
import { Content } from "./components/content/Content"

import './VivaColor.css'
import { Layout } from "./components/Layout/Layout"
import { ColorProvider } from "./context/ColorProvider"
import {Toaster} from 'sonner'



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
    <Toaster position="bottom-left" richColors/>
    </>
  )
}

export {VivaColorApp}
