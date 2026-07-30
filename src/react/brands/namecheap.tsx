import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandNamecheap: BrandIcon = ({
  className,
  size = 24,
  ...props
}: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Namecheap'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size}
    height={size}
    preserveAspectRatio='xMidYMid'
    role='img'
    viewBox='0 -57 256 256'
    {...props}>
    <defs>
      <linearGradient id='linearGradient-1' x1='13.322%' x2='82.62%' y1='94.945%' y2='1.132%'>
        <stop offset='0%' stopColor='#d4202c' />
        <stop offset='4.166%' stopColor='#d82d2b' stopOpacity='.958' />
        <stop offset='17.6%' stopColor='#e25226' stopOpacity='.824' />
        <stop offset='31.67%' stopColor='#eb7123' stopOpacity='.683' />
        <stop offset='46.35%' stopColor='#f28920' stopOpacity='.536' />
        <stop offset='61.88%' stopColor='#f69a1e' stopOpacity='.381' />
        <stop offset='78.86%' stopColor='#f9a41d' stopOpacity='.211' />
        <stop offset='100%' stopColor='#faa71d' stopOpacity='0' />
      </linearGradient>
      <linearGradient id='linearGradient-2' x1='86.624%' x2='17.326%' y1='5.04%' y2='98.855%'>
        <stop offset='0%' stopColor='#d4202c' />
        <stop offset='4.166%' stopColor='#d82d2b' stopOpacity='.958' />
        <stop offset='17.6%' stopColor='#e25226' stopOpacity='.824' />
        <stop offset='31.67%' stopColor='#eb7123' stopOpacity='.683' />
        <stop offset='46.35%' stopColor='#f28920' stopOpacity='.536' />
        <stop offset='61.88%' stopColor='#f69a1e' stopOpacity='.381' />
        <stop offset='78.86%' stopColor='#f9a41d' stopOpacity='.211' />
        <stop offset='100%' stopColor='#faa71d' stopOpacity='0' />
      </linearGradient>
    </defs>
    <path
      fill='#ff5000'
      d='M232 0c-9 0-16.8 5-20.9 12.3l-.5 1-18.8 37L168 97.2l15.6 30.7.9 1.7c2.4 4.2 6 7.7 10.4 9.8 4.4-2.2 8-5.6 10.4-9.8l.9-1.7 46.7-92 1.1-2.2c1.3-3 2-6.2 2-9.7 0-13.3-10.7-24-24-24M87.9 44.6 72.4 14l-.9-1.7c-2.4-4.2-6-7.7-10.4-9.8-4.4 2.2-8 5.6-10.4 9.8l-.8 1.7-46.7 92-1.1 2.2c-1.3 3-2 6.2-2 9.7 0 13.2 10.7 24 24 24 9 0 16.8-5 20.9-12.3l.5-1 18.8-37L88 44.7z'
    />
    <path
      fill='url(#linearGradient-1)'
      d='M232 0c-9 0-16.9 5-20.9 12.3l-.5 1-18.8 37L168 97.2l15.6 30.7.9 1.7c2.4 4.2 6 7.7 10.4 9.8 4.4-2.2 8-5.6 10.4-9.8l.9-1.7 46.7-92 1.1-2.2c1.3-3 2-6.2 2-9.7 0-13.3-10.8-24-24-24'
    />
    <path
      fill='url(#linearGradient-2)'
      d='M24 141.9c9 0 16.9-5 20.9-12.3l.5-1 18.8-37L88 44.7 72.4 14l-.9-1.7c-2.4-4.2-6-7.7-10.4-9.8-4.4 2.2-8 5.6-10.4 9.8l-.8 1.7-46.7 92-1.2 2.3c-1.3 3-2 6.2-2 9.7 0 13.2 10.7 23.9 24 23.9'
    />
    <path
      fill='#ff8c44'
      d='M87.9 44.6 72.4 14l-.9-1.7c-2.4-4.2-6-7.7-10.4-9.8 1.4-.7 3-1.3 4.5-1.7 1.9-.5 4-.8 6-.8h32.8c9 .1 16.8 5 20.9 12.3l.7 1.7 42.1 83.3 15.5 30.6.9 1.7c2.4 4.2 6 7.7 10.4 9.8-1.4.7-3 1.3-4.5 1.7-1.9.5-4 .8-6.1.8h-32.6c-9-.1-16.8-5-20.9-12.3l-.9-1.7z'
    />
  </svg>
)
