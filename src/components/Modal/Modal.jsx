import { motion } from 'framer-motion'
import Backdrop from '../Backdrop/Backdrop'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        drag
      >
        <p>{text}</p>
        <motion.button onClick={handleClose} className='close-button'>Close</motion.button>
      </motion.div>
    </Backdrop>
  )
}

export default Modal;