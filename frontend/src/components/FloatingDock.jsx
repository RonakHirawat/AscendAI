/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "../lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  className
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
  <motion.div
  onMouseMove={(e) => mouseX.set(e.pageX)}
  onMouseLeave={() => mouseX.set(Infinity)}
  className={cn(
    "mx-auto hidden md:flex h-20 w-[95%] max-w-[100rem] gap-6 items-end rounded-2xl bg-white-100 dark:bg-neutral-1000 px-6 pb-3 opacity-100 z-[99999] shadow-lg",
    className
  )}
>
  {/* AscendAi Name with More Spacing */}
  <span className="text-[3rem] font-bold text-black dark:text-white ml-6">
    AscendAi
  </span>

  {/* Empty space to push icons further */}
  <div className="flex-grow"></div>

  {/* Icons */}
  <div className="flex gap-8">
 
  </div>   {items.map((item) => (
      <IconContainer mouseX={mouseX} key={item.title} {...item} />
    ))}
</motion.div>

  );
};

const FloatingDockMobile = ({
  items,
  className
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden opacity-100 z-[99999]", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2 bg-white dark:bg-neutral-900 rounded-lg p-2 shadow-lg z-[99999]">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { delay: idx * 0.05 } }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}>
                <a
                  href={item.href}
                  key={item.title}
                  className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <div className="h-4 w-4 text-black dark:text-white">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-white flex items-center justify-center z-[99999]">
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-700 dark:text-neutral-400" />
      </button>
    </div>
  );
};
function IconContainer({
  mouseX,
  title,
  icon,
  href
}) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });
//original
  // let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  // let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let widthTransform = useTransform(distance, [-150, 0, 150], [50, 100, 50]); // Increase from [40, 80, 40]
  let heightTransform = useTransform(distance, [-150, 0, 150], [50, 100, 50]); // Increase from [40, 80, 40]
  
  // original
  // let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  // let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [25, 50, 25]); // Increase from [20, 40, 20]
let heightTransformIcon = useTransform(distance, [-150, 0, 150], [25, 50, 25]); // Increase from [20, 40, 20]


  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
<motion.div
  ref={ref}
  style={{ width, height }}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className="aspect-square rounded-full bg-white    flex items-center justify-center relative transition-colors duration-300 hover:bg-blue-500 dark:hover:bg-blue-700"
>
  <AnimatePresence>
    {hovered && (
      <motion.div
        initial={{ opacity: 0, y: 10, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        exit={{ opacity: 0, y: 2, x: "-50%" }}
        className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-white dark:border-neutral-900 dark:text-black border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs">
        {title}
      </motion.div>
    )}
  </AnimatePresence>
  <motion.div
    style={{ width: widthIcon, height: heightIcon }}
    className="flex items-center justify-center rounded-full bg-white transition-colors duration-300"
  >
    {icon}
  </motion.div>
</motion.div>
    </a>
  );
}
