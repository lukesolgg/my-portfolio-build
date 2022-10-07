import { motion } from 'framer-motion';

type Props = {}

function BackgroundSplit({}: Props) {
  return (
    <motion.div
    initial={ { opacity: 0, height: '0' } }
    whileInView={ { opacity: 1, height: '40vh' } }
    transition={ { duration: 1 } } 
    className='w-full absolute top-[30%] bg-[#2BAAE2]/40 left-0 h-[40vh] -skew-y-12 md:max-h-[500px]'
    />
  )
}

export default BackgroundSplit