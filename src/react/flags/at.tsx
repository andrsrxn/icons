import type { SVGProps } from 'react'

export const IconFlagAT = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>AT</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='at-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='at-linearGradient-2'>
          <stop stopColor='#F64253' offset='0%' />
          <stop stopColor='#EA2D3F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='at-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='at-AT'>
          <rect
            id='at-FlagBackground'
            fill='url(#at-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='at-Rectangle-2'
            fill='url(#at-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='at-Rectangle-2'
            fill='url(#at-linearGradient-2)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='at-Rectangle-2'
            fill='url(#at-linearGradient-1)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
        </g>
      </g>
    </svg>
  )
}
