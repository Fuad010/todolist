import Main from '@/components/Main/Main'
import AddModal from '@/components/Common/AddModal/AddModal'
import EditModal from '@/components/Common/EditModal/EditModal'
import CompletedModal from '@/components/Common/CompletedModal/CompletedModal'

export default function Home() {
  return (
    <>
      <Main />
      <AddModal />
      <EditModal />
      <CompletedModal />
    </>
  )
}
