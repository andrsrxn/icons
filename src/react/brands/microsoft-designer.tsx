import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandMicrosoftDesigner: BrandIcon = ({
  className,
  size = 24,
  ...props
}: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Microsoft Designer'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size}
    height={size}
    role='img'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 512 512'
    {...props}>
    <g clipPath='url(#microsoft_designer__a)'>
      <g clipPath='url(#microsoft_designer__b)'>
        <path
          fill='url(#microsoft_designer__c)'
          fillRule='evenodd'
          d='M440 415.811V247.996H240v8c-106.039 0-192 85.961-192 192v32c0 17.673 14.327 32 32 32h160c80.929 0 153.088-37.553 200-96.185'
          clipRule='evenodd'
        />
        <path
          fill='url(#microsoft_designer__d)'
          fillOpacity='.5'
          fillRule='evenodd'
          d='M440 415.811V247.996H240v8c-106.039 0-192 85.961-192 192v32c0 17.673 14.327 32 32 32h160c80.929 0 153.088-37.553 200-96.185'
          clipRule='evenodd'
        />
        <path
          fill='url(#microsoft_designer__e)'
          d='M240-.004H80c-17.673 0-32 14.327-32 32v32c0 106.039 85.961 192 192 192h72c70.692 0 128 57.308 128 128 0 13.657-2.139 26.814-6.1 39.155 38.699-44.85 62.1-103.269 62.1-167.155 0-141.385-114.615-256-256-256'
        />
        <path
          fill='url(#microsoft_designer__f)'
          fillOpacity='.5'
          d='M240-.004H80c-17.673 0-32 14.327-32 32v32c0 106.039 85.961 192 192 192h72c70.692 0 128 57.308 128 128 0 13.657-2.139 26.814-6.1 39.155 38.699-44.85 62.1-103.269 62.1-167.155 0-141.385-114.615-256-256-256'
        />
      </g>
    </g>
    <defs>
      <radialGradient
        id='microsoft_designer__c'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='rotate(-39.174 769.69 197.887)scale(417.938 512.42)'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.045' stopColor='#AD7DFF' />
        <stop offset='.328' stopColor='#6864F6' />
        <stop offset='.571' stopColor='#5750E2' />
        <stop offset='.809' stopColor='#3E36B1' />
        <stop offset='1' stopColor='#261D82' />
      </radialGradient>
      <radialGradient
        id='microsoft_designer__d'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='rotate(199.696 281.777 209.998)scale(481.906)'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.706' stopOpacity='0' stopColor='#AC80FF' />
        <stop offset='.921' stopColor='#BD96FF' />
      </radialGradient>
      <radialGradient
        id='microsoft_designer__e'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='rotate(38.202 1.73 77.015)scale(570.097 471.102)'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#FFC470' />
        <stop offset='.251' stopColor='#FF835C' />
        <stop offset='.584' stopColor='#F24A9D' />
        <stop offset='.871' stopColor='#B339F0' />
        <stop offset='1' stopColor='#C354FF' />
      </radialGradient>
      <radialGradient
        id='microsoft_designer__f'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='rotate(214.88 173.489 146.922)scale(445.335 422.903)'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.709' stopOpacity='0' stopColor='#FFB357' />
        <stop offset='.942' stopColor='#FFB357' />
      </radialGradient>
      <clipPath id='microsoft_designer__a'>
        <path fill='#fff' d='M0 0h512v512H0z' />
      </clipPath>
      <clipPath id='microsoft_designer__b'>
        <path fill='#fff' d='M0 0h512v512H0z' />
      </clipPath>
    </defs>
  </svg>
)
