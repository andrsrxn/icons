import type { SVGProps } from 'react'

export const IconFlagPR = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>PR</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pr-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pr-linearGradient-2'>
          <stop stopColor='#FA2222' offset='0%' />
          <stop stopColor='#ED0000' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pr-linearGradient-3'>
          <stop stopColor='#1D63F9' offset='0%' />
          <stop stopColor='#0650F0' offset='100%' />
        </linearGradient>
      </defs>
      <g id='pr-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='pr-PR'>
          <rect
            id='pr-FlagBackground'
            fill='url(#pr-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='pr-Mask-Copy'
            fill='url(#pr-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='pr-Rectangle-2'
            fill='url(#pr-linearGradient-1)'
            x='0'
            y='3'
            width='21'
            height='3'
          />
          <rect
            id='pr-Rectangle-2-Copy'
            fill='url(#pr-linearGradient-1)'
            x='0'
            y='9'
            width='21'
            height='3'
          />
          <polygon id='pr-Rectangle-83' fill='url(#pr-linearGradient-3)' points='0 0 10 7.5 0 15' />
          <polygon
            id='pr-Star-27'
            fill='url(#pr-linearGradient-1)'
            points='3.5 8.45555972 2.03053687 9.52254249 2.5912087 7.79528419 1.12235871 6.72745751 2.93833609 6.72693595 3.5 5 4.06166391 6.72693595 5.87764129 6.72745751 4.4087913 7.79528419 4.96946313 9.52254249'
          />
        </g>
      </g>
    </svg>
  )
}
