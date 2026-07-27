import type { SVGProps } from 'react'
export const IconBrandAngular = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Angular'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    viewBox='0 0 242 256'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}>
    <g clipPath='url(#angular__a)'>
      <mask
        id='angular__b'
        width='242'
        height='256'
        x='0'
        y='0'
        style={{
          maskType: 'luminance',
        }}
        maskUnits='userSpaceOnUse'>
        <path fill='#fff' d='M0 0h242v256H0z' />
      </mask>
      <g mask='url(#angular__b)'>
        <path
          fill='url(#angular__c)'
          d='m241 43-9 136L149 0zm-58 176-62 36-63-36 12-31h101zM121 68l32 80H88zM9 179 0 43 92 0z'
        />
        <path
          fill='url(#angular__d)'
          d='m241 43-9 136L149 0zm-58 176-62 36-63-36 12-31h101zM121 68l32 80H88zM9 179 0 43 92 0z'
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id='angular__c'
        x1='53.2'
        x2='245'
        y1='231.9'
        y2='140.7'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#e40035' />
        <stop offset='.2' stopColor='#f60a48' />
        <stop offset='.4' stopColor='#f20755' />
        <stop offset='.5' stopColor='#dc087d' />
        <stop offset='.7' stopColor='#9717e7' />
        <stop offset='1' stopColor='#6c00f5' />
      </linearGradient>
      <linearGradient
        id='angular__d'
        x1='44.5'
        x2='170'
        y1='30.7'
        y2='174'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#ff31d9' />
        <stop offset='1' stopColor='#ff5be1' stopOpacity='0' />
      </linearGradient>
      <clipPath id='angular__a'>
        <path fill='#fff' d='M0 0h242v256H0z' />
      </clipPath>
    </defs>
  </svg>
)
