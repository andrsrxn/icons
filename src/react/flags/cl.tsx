import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCL: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size ?? 'auto',
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>CL</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cl-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cl-linearGradient-2'>
          <stop stopColor='#EA3B2E' offset='0%' />
          <stop stopColor='#D52B1E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cl-linearGradient-3'>
          <stop stopColor='#0B48C2' offset='0%' />
          <stop stopColor='#0239A7' offset='100%' />
        </linearGradient>
      </defs>
      <g id='cl-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='cl-CL'>
          <rect
            id='cl-FlagBackground'
            fill='url(#cl-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='cl-Rectangle-2'
            fill='url(#cl-linearGradient-2)'
            x='0'
            y='7'
            width='21'
            height='8'
          />
          <rect
            id='cl-Rectangle-2'
            fill='url(#cl-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='7'
          />
          <rect
            id='cl-Rectangle-83'
            fill='url(#cl-linearGradient-3)'
            x='0'
            y='0'
            width='7'
            height='7'
          />
          <polygon
            id='cl-Star-8'
            fill='url(#cl-linearGradient-1)'
            points='3.5 4.28000003 2.3244295 5.11803399 2.75817589 3.74103327 1.59788697 2.88196601 3.04152748 2.86896672 3.5 1.5 3.95847252 2.86896672 5.40211303 2.88196601 4.24182411 3.74103327 4.6755705 5.11803399'
          />
        </g>
      </g>
    </svg>
  )
}
