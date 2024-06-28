import { motion } from 'framer-motion';

// variants
const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

const Stairs: React.FC = () => {
  return <div>Stairs</div>;
};

export default Stairs;
