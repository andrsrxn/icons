import type { SVGProps } from 'react'
export const IconBrandShadcnUI = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='shadcn/ui'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 256 256'
    fill='none'
    stroke='none'
    {...props}>
    <path stroke='#fff' strokeWidth='1' fill='#000' d='M0 0h256v256H0z' />
    <path stroke='#fff' strokeWidth='25' strokeLinecap='round' d='M208 128l-80 80M192 40L40 192' />
  </svg>
)
