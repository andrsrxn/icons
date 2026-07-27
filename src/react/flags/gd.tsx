import type { SVGProps } from 'react'

export const IconFlagGD = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='21px'
      height='15px'
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>GD</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gd-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gd-linearGradient-2'>
          <stop stopColor='#E42235' offset='0%' />
          <stop stopColor='#CE1225' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gd-linearGradient-3'>
          <stop stopColor='#079B77' offset='0%' />
          <stop stopColor='#007B5D' offset='100%' />
        </linearGradient>
        <rect id='gd-path-4' x='0' y='0' width='17' height='11' />
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gd-linearGradient-6'>
          <stop stopColor='#FFD938' offset='0%' />
          <stop stopColor='#FDD117' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gd-linearGradient-7'>
          <stop stopColor='#FFD93B' offset='0%' />
          <stop stopColor='#FDD117' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gd-linearGradient-8'>
          <stop stopColor='#E21C30' offset='0%' />
          <stop stopColor='#CE1225' offset='100%' />
        </linearGradient>
      </defs>
      <g id='gd-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='gd-GD'>
          <rect
            id='gd-FlagBackground'
            fill='url(#gd-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='gd-Mask' fill='url(#gd-linearGradient-2)' x='0' y='0' width='21' height='15' />
          <g id='gd-Rectangle-1128' transform='translate(2.000000, 2.000000)'>
            <mask id='gd-mask-5' fill='white'>
              <use xlinkHref='#gd-path-4' />
            </mask>
            <use id='gd-Mask' fill='url(#gd-linearGradient-3)' xlinkHref='#gd-path-4' />
            <path
              d='M1.2948789,5.59885368 C1.57800611,6.05195195 1.98448743,6.3510373 2.36308877,6.42779338 C2.57152317,6.47005051 2.18990286,5.51415964 2.35620138,5.41024479 C2.49809484,5.32157992 3.18079024,6.11649051 3.24057126,5.95064666 C3.37811632,5.56907067 3.29697727,5.02872102 2.99097509,4.53901516 C2.5519756,3.83646911 2.53483743,4.30016223 1.3480481,3.79686228 C1.47213428,4.51662311 0.855879404,4.89630764 1.2948789,5.59885368 L1.2948789,5.59885368 Z'
              id='gd-Oval-180'
              fill='url(#gd-linearGradient-6)'
              mask='url(#gd-mask-5)'
            />
            <path
              d='M0,0 L17,0 L8.5,5.5 L0,0 Z M0,11 L8.5,5.5 L17,11 L0,11 Z'
              id='gd-Rectangle-1129'
              fill='url(#gd-linearGradient-7)'
              mask='url(#gd-mask-5)'
            />
            <circle
              id='gd-Oval-179'
              fill='url(#gd-linearGradient-8)'
              mask='url(#gd-mask-5)'
              cx='8.5'
              cy='5.5'
              r='2.5'
            />
            <polygon
              id='gd-Star-96'
              fill='url(#gd-linearGradient-6)'
              mask='url(#gd-mask-5)'
              points='8.5 6.27129709 7.3244295 7.11803399 7.76645288 5.73834391 6.59788697 4.88196601 8.04664295 4.87600755 8.5 3.5 8.95335705 4.87600755 10.402113 4.88196601 9.23354712 5.73834391 9.6755705 7.11803399'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
