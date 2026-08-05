import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBR: FlagIcon = ({
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
      <title>BR</title>

      <defs>
        <linearGradient id='br-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='br-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#05ab41' />
          <stop offset='100%' stopColor='#019c39' />
        </linearGradient>
        <linearGradient id='br-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#053087' />
          <stop offset='100%' stopColor='#012877' />
        </linearGradient>
        <circle id='br-c' cx='3.5' cy='3.5' r='3.5' />
        <clipPath id='br-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#br-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#br-a)' d='M0 0h21v15H0z' />
          <path fill='url(#br-b)' d='M0 0h21v15H0z' />
          <path
            fill='#fdd216'
            d='M2.422 7.773c-.233-.15-.228-.398 0-.546l7.656-4.954a.85.85 0 0 1 .844 0l7.656 4.954c.233.15.228.398 0 .546l-7.656 4.954a.85.85 0 0 1-.844 0z'
          />
          <g transform='translate(7 4)'>
            <mask id='br-e' fill='#fff'>
              <use xlinkHref='#br-c' />
            </mask>
            <use xlinkHref='#br-c' fill='url(#br-d)' />
            <path
              fill='#fff'
              fillRule='nonzero'
              d='M-.1 2.974c.265-.215 1.463-.04 3.534.512 1.474.394 3.173 1.262 3.562 1.742l.314.388.778-.629-.315-.388c-.55-.68-2.421-1.636-4.081-2.079-2.586-.69-3.758-.86-4.422-.323l-.388.314.629.777z'
              mask='url(#br-e)'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
