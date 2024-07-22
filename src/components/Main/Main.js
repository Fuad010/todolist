import Header from '../Common/Header/Header'
import Todos from '../Common/Todos/Todos'
import Footer from '../Common/Footer/Footer'

export default function Main() {
  return (
    <>
      <Header isModal={false} title={'Todo App'} />
      <Todos />
      <Footer />
    </>
  )
}
