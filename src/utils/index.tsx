export const getVariantStyles = (variant: string) => {
  switch (variant) {
    case "heading":
      return "text-2xl font-bold";
    case "subheading":
      return "text-lg font-medium";
    default:
      return "";
  }
};
