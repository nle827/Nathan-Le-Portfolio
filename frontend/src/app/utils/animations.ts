export const headerContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};
