import styles from './style.module.css'

const Backdrop = ({ IsOpen, onClose }) =>
  IsOpen ? <div className={styles.Backdrop} onClick={onClose} /> : null

export default Backdrop
