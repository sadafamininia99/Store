import { useState } from 'react'

import Backdrop from './Backdrop/Backdrop'
import styles from './style.module.css'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openSidebarHandler = () => setIsOpen(true)
  const closeSidebarHandler = () => setIsOpen(false)

  const sidebarClasses = [styles.Sidebar]

  if (isOpen) sidebarClasses.push(styles.Open)

  return (
    <>
      <header className={styles.TopBar}>
        <button onClick={openSidebarHandler}>dd</button>
      </header>
      <aside className={sidebarClasses.join(' ')}>
        <li>test</li>
      </aside>
      <Backdrop IsOpen={isOpen} onClose={closeSidebarHandler} />
    </>
  )
}

export default Sidebar
