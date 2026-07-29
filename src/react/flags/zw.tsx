import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagZW: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>ZW</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='zw-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='zw-linearGradient-2'>
          <stop stopColor='#369D0C' offset='0%' />
          <stop stopColor='#319209' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='zw-linearGradient-3'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='zw-linearGradient-4'>
          <stop stopColor='#FFD40E' offset='0%' />
          <stop stopColor='#FFD201' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='zw-linearGradient-5'>
          <stop stopColor='#F12F1F' offset='0%' />
          <stop stopColor='#DE2010' offset='100%' />
        </linearGradient>
      </defs>
      <g id='zw-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='zw-ZW'>
          <rect
            id='zw-FlagBackground'
            fill='url(#zw-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='zw-Rectangle-2'
            fill='url(#zw-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='2'
          />
          <rect
            id='zw-Rectangle-2'
            fill='url(#zw-linearGradient-2)'
            x='0'
            y='13'
            width='21'
            height='2'
          />
          <rect
            id='zw-Rectangle-2'
            fill='url(#zw-linearGradient-2)'
            x='0'
            y='4'
            width='21'
            height='2'
          />
          <rect
            id='zw-Rectangle-2'
            fill='url(#zw-linearGradient-2)'
            x='0'
            y='9'
            width='21'
            height='2'
          />
          <rect
            id='zw-Rectangle-2'
            fill='url(#zw-linearGradient-3)'
            x='0'
            y='6'
            width='21'
            height='3'
          />
          <rect
            id='zw-Rectangle-2'
            fill='url(#zw-linearGradient-4)'
            x='0'
            y='2'
            width='21'
            height='2'
          />
          <rect
            id='zw-Rectangle-2'
            fill='url(#zw-linearGradient-4)'
            x='0'
            y='11'
            width='21'
            height='2'
          />
          <polygon
            id='zw-Rectangle-83'
            fill='url(#zw-linearGradient-3)'
            fillRule='nonzero'
            points='-1 15 -1 0 0 0 10 7.5 0 15'
          />
          <polygon
            id='zw-Rectangle-83'
            fill='url(#zw-linearGradient-1)'
            fillRule='nonzero'
            points='0 13.75 8.33333333 7.5 6.66133815e-16 1.25'
          />
          <polygon
            id='zw-Star-8'
            fill='url(#zw-linearGradient-5)'
            points='3 8.47500004 1.53053687 9.52254249 2.07271986 7.80129158 0.622358709 6.72745751 2.42690936 6.7112084 3 5 3.57309064 6.7112084 5.37764129 6.72745751 3.92728014 7.80129158 4.46946313 9.52254249'
          />
        </g>
      </g>
    </svg>
  )
}
