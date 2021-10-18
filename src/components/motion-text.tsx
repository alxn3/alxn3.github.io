import { AnimationControls, motion, TargetAndTransition, VariantLabels } from 'framer-motion';
import { AnimationDefinition } from 'framer-motion/types/render/utils/animation';

type Props = {
  word: string;
  maxLength: number;
  animate: boolean | TargetAndTransition | AnimationControls | VariantLabels;
  onAnimationComplete?: (definition: AnimationDefinition) => void;
  callbackOnIndex?: number;
  className?: string;
};

const MotionText: React.FC<Props> = ({
  word,
  maxLength,
  animate,
  onAnimationComplete,
  callbackOnIndex,
  className,
}) => {
  return (
    <motion.span className={`absolute ${className || ''}`}>
      {Array.from(Array(maxLength)).map((_, i) => (
        <motion.span
          key={i}
          custom={i}
          initial={{ opacity: 0 }}
          animate={animate}
          onAnimationComplete={(def) => {
            i == (callbackOnIndex || 0) && onAnimationComplete(def);
          }}
        >
          {word[i]}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default MotionText;
