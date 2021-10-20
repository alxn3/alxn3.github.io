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
  const [evenWordIndex, setEvenWordIndex] = useState(-1);
  const [currentColor, setCurrentColor] = useState(0);
  const LONGEST_WORD = words.reduce((a, b) => (a.length > b.length ? a : b));
  const MAX_LENGTH = LONGEST_WORD.length;
  const controlOdd = useAnimation();
  const controlEven = useAnimation();

  const duration = 2.5;
  const stagger = 0.125;
  const animation: ControlsAnimationDefinition = (i) => ({
    opacity: [0, 1],
    transition: {
      repeat: 1,
      repeatType: 'mirror',
      delay: i * stagger,
      duration: duration,
    },
  });
  const callBackIndex = 0;
  useEffect(() => {
    controlOdd.start(animation);
    return () => controlOdd.stop();
  }, []);
  return (
    <span className={`relative ${className}`}>
      <MotionText
        word={words[oddWordIndex]}
        maxLength={MAX_LENGTH}
        animate={controlOdd}
        callbackOnIndex={callBackIndex}
        onAnimationComplete={() => {
          setEvenWordIndex((evenWordIndex + 2) % words.length);
          controlEven.start(animation);
          setCurrentColor((currentColor + 1) % colors.length)
        }}
        className={(colors && `${colors[currentColor]}  transition-colors duration-[2500ms]`) || ''}
      />
      <MotionText
        word={words[evenWordIndex] || ''}
        maxLength={MAX_LENGTH}
        animate={controlEven}
        callbackOnIndex={callBackIndex}
        onAnimationComplete={() => {
          setOddWordIndex((oddWordIndex + 2) % words.length);
          controlOdd.start(animation);
          setCurrentColor((currentColor + 1) % colors.length)
        }}
        className={(colors && `${colors[currentColor]}  transition-colors duration-[2500ms]`) || ''}
      />
      {/* Don't get rid of pr-2, it breaks the code for some reason. */}
      <span className="pr-2 opacity-0 select-none">{LONGEST_WORD}</span>
    </span>
  );
};
export default ShiftingText;
