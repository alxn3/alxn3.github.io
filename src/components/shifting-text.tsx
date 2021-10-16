import { useAnimation } from 'framer-motion';
import { ControlsAnimationDefinition } from 'framer-motion/types/animation/types';
import { useEffect, useState } from 'react';
import MotionText from './motion-text';

type Props = {
  words?: string[];
  className?: string;
  colors?: string[];
};

const ShiftingText: React.FC<Props> = ({
  words = ['This', 'Is', 'Sample', 'Text'],
  className,
  colors,
}) => {
  const [oddWordIndex, setOddWordIndex] = useState(0);
  const [evenWordIndex, setEvenWordIndex] = useState(words.length > 1 ? 1 : 0);
  const LONGEST_WORD = words.reduce((a, b) => (a.length > b.length ? a : b));
  const MAX_LENGTH = LONGEST_WORD.length;
  const controlOdd = useAnimation();
  const controlEven = useAnimation();

  const duration = 2;
  const stagger = 0.15;
  const spacing = 0.5;
  const animation: ControlsAnimationDefinition = (i) => ({
    opacity: [0, 1],
    transition: {
      repeat: 1,
      repeatType: 'mirror',
      delay: i * stagger,
      duration: duration,
    },
  });
  const calcDelay = (len) => (duration + spacing) * 1000;
  useEffect(() => {
    controlOdd.start(animation);
    setTimeout(
      () => controlEven.start(animation),
      calcDelay(words[oddWordIndex].length) + (duration * 1000) / 2
    );
    return () => controlOdd.stop();
  }, []);
  return (
    <span className={`relative ${className}`}>
      <MotionText
        word={words[oddWordIndex]}
        maxLength={MAX_LENGTH}
        animate={controlOdd}
        onAnimationComplete={() =>
          setTimeout(() => {
            controlOdd.start(animation);
            setOddWordIndex((oddWordIndex + 2) % words.length);
          }, calcDelay(words[oddWordIndex].length))
        }
        className={(colors && colors[oddWordIndex]) || ''}
      />
      <MotionText
        word={words[evenWordIndex]}
        maxLength={MAX_LENGTH}
        animate={controlEven}
        onAnimationComplete={() =>
          setTimeout(() => {
            controlEven.start(animation);
            setEvenWordIndex((evenWordIndex + 2) % words.length);
          }, calcDelay(words[evenWordIndex].length))
        }
        className={(colors && colors[evenWordIndex]) || ''}
      />
      {/* Don't get rid of pr-2, it breaks the code for some reason. */}
      <span className="opacity-0 pr-2">{LONGEST_WORD}</span>
    </span>
  );
};
export default ShiftingText;
