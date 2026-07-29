import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandStackBlitz: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='StackBlitz'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    role='img'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 256 368'
    xmlSpace='preserve'
    {...props}>
    <path
      fill='#49A2F8'
      d='M109.586 217.013H0L200.34 0l-53.926 150.233H256L55.645 367.246l53.927-150.233z'
    />
  </svg>
)
