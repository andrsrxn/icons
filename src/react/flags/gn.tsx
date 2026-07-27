import type { SVGProps } from 'react'

export const IconFlagGN = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>GN</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gn-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gn-linearGradient-2'>
          <stop stopColor='#1DBE5E' offset='0%' />
          <stop stopColor='#169E4D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gn-linearGradient-3'>
          <stop stopColor='#E72B42' offset='0%' />
          <stop stopColor='#CC162C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gn-linearGradient-4'>
          <stop stopColor='#FFD952' offset='0%' />
          <stop stopColor='#FCD036' offset='100%' />
        </linearGradient>
      </defs>
      <g id='gn-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='gn-GN'>
          <rect
            id='gn-FlagBackground'
            fill='url(#gn-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='gn-Mask' fill='url(#gn-linearGradient-2)' x='10' y='0' width='11' height='15' />
          <rect
            id='gn-Rectangle-2'
            fill='url(#gn-linearGradient-3)'
            x='0'
            y='0'
            width='7'
            height='15'
          />
          <rect
            id='gn-Rectangle-2-Copy'
            fill='url(#gn-linearGradient-4)'
            x='7'
            y='0'
            width='7'
            height='15'
          />
        </g>
      </g>
    </svg>
  )
}
