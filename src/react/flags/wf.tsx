import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagWF: FlagIcon = ({
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
      <title>WF</title>

      <defs>
        <linearGradient id='wf-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='wf-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f44653' />
          <stop offset='100%' stopColor='#ee2a39' />
        </linearGradient>
        <linearGradient id='wf-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1035bb' />
          <stop offset='100%' stopColor='#042396' />
        </linearGradient>
        <clipPath id='wf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#wf-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#wf-a)' d='M0 0h21v15H0z' />
          <path fill='url(#wf-b)' d='M10 0h11v15H10z' />
          <path fill='url(#wf-c)' d='M0 0h7v15H0z' />
          <path fill='url(#wf-a)' d='M7 0h7v15H7z' />
        </g>
      </g>
    </svg>
  )
}
