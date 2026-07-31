import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagLY: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
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
      <title>LY</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ly-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ly-linearGradient-2'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ly-linearGradient-3'>
          <stop stopColor='#34B857' offset='0%' />
          <stop stopColor='#2B9E4A' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ly-linearGradient-4'>
          <stop stopColor='#F41F34' offset='0%' />
          <stop stopColor='#E60B21' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ly-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ly-LY'>
          <rect
            id='ly-FlagBackground'
            fill='url(#ly-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ly-Rectangle-2'
            fill='url(#ly-linearGradient-2)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <rect
            id='ly-Rectangle-2'
            fill='url(#ly-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='ly-Rectangle-2'
            fill='url(#ly-linearGradient-4)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <path
            d='M11.3335689,6.25274924 C11.3059482,6.25092604 11.2780822,6.25 11.25,6.25 C10.5596441,6.25 10,6.80964406 10,7.5 C10,8.19035594 10.5596441,8.75 11.25,8.75 C11.2780822,8.75 11.3059482,8.74907396 11.3335689,8.74725076 C11.0951725,8.9068934 10.8084594,9 10.5,9 C9.67157288,9 9,8.32842712 9,7.5 C9,6.67157288 9.67157288,6 10.5,6 C10.8084594,6 11.0951725,6.0931066 11.3335689,6.25274924 Z M11.5,8 C11.2238576,8 11,7.77614237 11,7.5 C11,7.22385763 11.2238576,7 11.5,7 C11.7761424,7 12,7.22385763 12,7.5 C12,7.77614237 11.7761424,8 11.5,8 Z'
            id='ly-Oval-68'
            fill='url(#ly-linearGradient-1)'
          />
        </g>
      </g>
    </svg>
  )
}
