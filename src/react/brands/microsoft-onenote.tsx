import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandMicrosoftOneNote: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Microsoft OneNote'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    preserveAspectRatio='xMidYMid'
    viewBox='4 6 35 35.999'
    {...props}>
    <path
      fill='url(#microsoft_onenote__a)'
      d='M9 33.545A6.545 6.545 0 0 1 15.546 27H39v11.727a3.273 3.273 0 0 1-3.273 3.272l-20.592-.005A6.136 6.136 0 0 1 9 35.858z'
    />
    <path
      fill='url(#microsoft_onenote__b)'
      d='m25 14.5 14-.5v12.727A3.273 3.273 0 0 1 35.727 30H25z'
    />
    <path
      fill='url(#microsoft_onenote__c)'
      d='M9.005 11.999a6 6 0 0 1 6-5.999H35.5A3.5 3.5 0 0 1 39 9.5v5a3.5 3.5 0 0 1-3.5 3.5h-3a3.5 3.5 0 0 0-3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5H15a6 6 0 0 0-6 6z'
    />
    <path
      fill='url(#microsoft_onenote__d)'
      d='M9.005 11.999a6 6 0 0 1 6-5.999H35.5A3.5 3.5 0 0 1 39 9.5v5a3.5 3.5 0 0 1-3.5 3.5h-3a3.5 3.5 0 0 0-3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5H15a6 6 0 0 0-6 6z'
    />
    <rect width='16' height='16' x='4' y='23' fill='url(#microsoft_onenote__e)' rx='3.25' />
    <rect
      width='16'
      height='16'
      x='4'
      y='23'
      fill='url(#microsoft_onenote__f)'
      fillOpacity='.8'
      rx='3.25'
    />
    <path
      fill='#fff'
      d='M16.11 35.571h-2.077l-3.766-5.642a16 16 0 0 1-.268-.44 4 4 0 0 1-.166-.319h-.025q.012.243.019.612.006.37.006.867v4.922H7.89V26.43h2.217l3.626 5.464a9 9 0 0 1 .223.376q.115.184.21.37h.026a9 9 0 0 1-.019-.472 40 40 0 0 1-.006-.784V26.43h1.943z'
    />
    <defs>
      <radialGradient
        id='microsoft_onenote__a'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='matrix(47.5733 0 0 20.0481 38.125 42)'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.159' stopColor='#A931D8' />
        <stop offset='.566' stopColor='#6E1996' />
      </radialGradient>
      <radialGradient
        id='microsoft_onenote__d'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='rotate(121.483 19.403 13.628)scale(28.8769 50.7758)'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#FFC7A3' />
        <stop offset='.831' stopOpacity='0' stopColor='#DE67FD' />
      </radialGradient>
      <radialGradient
        id='microsoft_onenote__e'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='rotate(45 -25.763 16.328)scale(22.6274)'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.072' stopColor='#AC13EB' />
        <stop offset='.879' stopColor='#580087' />
      </radialGradient>
      <radialGradient
        id='microsoft_onenote__f'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='matrix(0 11.2 -12.9 0 12 32.6)'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.585' stopOpacity='0' stopColor='#841FB0' />
        <stop offset='.969' stopColor='#D373FC' />
      </radialGradient>
      <linearGradient
        id='microsoft_onenote__b'
        x1='45.284'
        x2='28.013'
        y1='22.752'
        y2='14.022'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.217' stopColor='#CA59F7' />
        <stop offset='.888' stopColor='#691A90' />
      </linearGradient>
      <linearGradient
        id='microsoft_onenote__c'
        x1='40.327'
        x2='9.007'
        y1='13.764'
        y2='13.764'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.807' stopColor='#DE66FF' />
        <stop offset='1' stopColor='#FCB1FF' />
      </linearGradient>
    </defs>
  </svg>
)
