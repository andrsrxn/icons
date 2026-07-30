import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCM: FlagIcon = ({
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
      <title>CM</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cm-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cm-linearGradient-2'>
          <stop stopColor='#FFDC44' offset='0%' />
          <stop stopColor='#FDD216' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cm-linearGradient-3'>
          <stop stopColor='#059170' offset='0%' />
          <stop stopColor='#007B5E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cm-linearGradient-4'>
          <stop stopColor='#E21A30' offset='0%' />
          <stop stopColor='#CE1126' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cm-linearGradient-5'>
          <stop stopColor='#FFDC42' offset='0%' />
          <stop stopColor='#FDD217' offset='100%' />
        </linearGradient>
      </defs>
      <g id='cm-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='cm-CM'>
          <rect
            id='cm-FlagBackground'
            fill='url(#cm-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='cm-Mask' fill='url(#cm-linearGradient-2)' x='10' y='0' width='11' height='15' />
          <rect
            id='cm-Rectangle-2'
            fill='url(#cm-linearGradient-3)'
            x='0'
            y='0'
            width='7'
            height='15'
          />
          <rect
            id='cm-Rectangle-2-Copy'
            fill='url(#cm-linearGradient-4)'
            x='7'
            y='0'
            width='7'
            height='15'
          />
          <rect
            id='cm-Rectangle-2-Copy-2'
            fill='url(#cm-linearGradient-2)'
            x='14'
            y='0'
            width='7'
            height='15'
          />
          <polygon
            id='cm-Star-8'
            fill='url(#cm-linearGradient-5)'
            points='10.5 8.47500004 9.03053687 9.52254249 9.57271986 7.80129158 8.12235871 6.72745751 9.92690936 6.7112084 10.5 5 11.0730906 6.7112084 12.8776413 6.72745751 11.4272801 7.80129158 11.9694631 9.52254249'
          />
        </g>
      </g>
    </svg>
  )
}
