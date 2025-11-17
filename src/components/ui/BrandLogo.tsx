import Image from 'next/image';

type BrandLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

const BrandLogo = ({ size = 64, className = '', priority = false }: BrandLogoProps) => (
  <Image
    src="/images/construction/OMVLogo.png"
    alt="OM Vinayaga Constructions logo"
    width={size}
    height={size}
    priority={priority}
    className={`object-contain ${className}`.trim()}
  />
);

export default BrandLogo;

