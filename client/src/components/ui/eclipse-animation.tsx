import { motion } from "framer-motion";

interface EclipseAnimationProps {
  size?: number;
  color?: string;
  reverse?: boolean;
  duration?: number;
  delay?: number;
}

export function EclipseAnimation({
  size = 100,
  color = "border-primary",
  reverse = false,
  duration = 20,
  delay = 0,
}: EclipseAnimationProps) {
  return (
    <motion.div
      className={`eclipse ${color}`}
      style={{
        width: `${size}%`,
        height: `${size}%`,
        top: `${(100 - size) / 2}%`,
        left: `${(100 - size) / 2}%`,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
    />
  );
}

interface EclipseSetProps {
  profileSize?: string;
}

export function EclipseSet({ profileSize = "w-64 h-64 md:w-80 md:h-80" }: EclipseSetProps) {
  return (
    <div className={`relative ${profileSize}`}>
      <EclipseAnimation size={100} color="border-primary" duration={20} />
      <EclipseAnimation size={110} color="border-accent" duration={25} reverse={true} delay={0.5} />
      <EclipseAnimation size={120} color="border-white/30" duration={30} delay={1} />
      
      {/* The profile picture container */}
      <div className="rounded-full overflow-hidden w-full h-full border-4 border-primary/50 shadow-xl shadow-primary/20 z-10 relative">
        {/* Profile picture will be added as a child component */}
      </div>
    </div>
  );
}
