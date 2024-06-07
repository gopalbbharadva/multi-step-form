import { TypoGraphyPropsType } from "@/types";
import { getVariantStyles } from "@/utils";

export const Typography = ({ variant, text ,className}: TypoGraphyPropsType) => {
  const variantStyle = getVariantStyles(variant);

  return <p className={`${variantStyle} ${className}`}>{text}</p>;

};
