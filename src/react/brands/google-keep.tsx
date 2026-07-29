import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandGoogleKeep: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Keep'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <circle cx='12' cy='9.6' r='9.6' fill='url(#paint0_radial_1_202)' />
    <path fill='#f7a200' d='M7.733 18.133h8.534v1.6a4.267 4.267 0 0 1-8.534 0z' />
    <mask
      id='mask0_1_202'
      width='20'
      height='19'
      x='2'
      y='0'
      maskUnits='userSpaceOnUse'
      style={{ maskType: 'alpha' }}>
      <path
        fill='#000'
        d='M12 0a9.6 9.6 0 0 0-9.6 9.6 9.6 9.6 0 0 0 5.333 8.602h8.534A9.6 9.6 0 0 0 21.6 9.6 9.6 9.6 0 0 0 12 0'
      />
    </mask>
    <g filter='url(#filter0_f_1_202)' mask='url(#mask0_1_202)'>
      <path fill='#ffb7e7' d='M7.733 13.867a4.267 4.267 0 0 1 8.534 0v6.4H7.733z' />
    </g>
    <path stroke='#fff' strokeLinecap='round' strokeWidth='3.733' d='M11.467 16h1.066' />
    <defs>
      <radialGradient
        id='paint0_radial_1_202'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='matrix(0 10.1333 -17.9432 0 12 13.333)'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#fef03c' />
        <stop offset='1' stopColor='#fec001' />
      </radialGradient>
      <filter
        id='filter0_f_1_202'
        width='14.933'
        height='17.067'
        x='4.533'
        y='6.4'
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'>
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' mode='normal' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_1_202' stdDeviation='1.6' />
      </filter>
    </defs>
  </svg>
)
