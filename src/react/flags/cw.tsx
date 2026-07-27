import type { SVGProps } from 'react'

export const IconFlagCW = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>CW</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cw-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cw-linearGradient-2'>
          <stop stopColor='#0543A8' offset='0%' />
          <stop stopColor='#00307D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cw-linearGradient-3'>
          <stop stopColor='#FCC747' offset='0%' />
          <stop stopColor='#FEC539' offset='100%' />
        </linearGradient>
      </defs>
      <g id='cw-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='cw-CW'>
          <rect
            id='cw-FlagBackground'
            fill='url(#cw-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='cw-Mask-Copy'
            fill='url(#cw-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='cw-Rectangle-1337'
            fill='url(#cw-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='2'
          />
          <polygon
            id='cw-Star-53'
            fill='url(#cw-linearGradient-1)'
            points='6.5 6.26701627 5.3244295 7.11803399 5.77052418 5.73702106 4.59788697 4.88196601 6.04915915 4.8794708 6.5 3.5 6.95084085 4.8794708 8.40211303 4.88196601 7.22947582 5.73702106 7.6755705 7.11803399'
          />
          <polygon
            id='cw-Star-53-Copy'
            fill='url(#cw-linearGradient-1)'
            points='3 3.5752622 2.11832212 4.21352549 2.45289314 3.1777658 1.57341523 2.53647451 2.66186936 2.5346031 3 1.5 3.33813064 2.5346031 4.42658477 2.53647451 3.54710686 3.1777658 3.88167788 4.21352549'
          />
        </g>
      </g>
    </svg>
  )
}
