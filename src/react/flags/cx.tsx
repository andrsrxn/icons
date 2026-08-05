import type { FlagIcon } from './types'

export const IconFlagCX: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isHidden = ariaHidden === true
  const titleText = title ?? 'CX'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='cx-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cx-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0637c5' />
          <stop offset='100%' stopColor='#002caa' />
        </linearGradient>
        <linearGradient id='cx-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#3ba758' />
          <stop offset='100%' stopColor='#2c8945' />
        </linearGradient>
        <linearGradient id='cx-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffcc5d' />
          <stop offset='100%' stopColor='#fec54a' />
        </linearGradient>
        <clipPath id='cx-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cx-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cx-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cx-b)' d='M0 0h21v15H0z' />
          <path
            fill='#fff'
            d='m4 13-.707.207.207-.707-.207-.707L4 12l.707-.207-.207.707.207.707zM4 5.5l-.707.207L3.5 5l-.207-.707L4 4.5l.707-.207L4.5 5l.207.707zM6 8.5l-.707.207L5.5 8l-.207-.707L6 7.5l.707-.207L6.5 8l.207.707zM2 9.5l-.707.207L1.5 9l-.207-.707L2 8.5l.707-.207L2.5 9l.207.707zM5.5 10.75l-.354.104.104-.354-.104-.354.354.104.354-.104-.104.354.104.354z'
          />
          <path
            fill='url(#cx-c)'
            d='m0 15 8.92-6.372s1.983 1.025 2.74.484.348-2.689.348-2.689L21 0H0z'
            transform='matrix(-1 0 0 1 21 0)'
          />
          <path
            fill='url(#cx-d)'
            d='M14.46 7.5s2.415-.4 2.703-1.527-2.298-1.934-2.4-2.34.95-.117 1.415 0c.451.115 1.333.696 1.333.696s-.01-.8-.131-1.17c-.202-.62-.836-1.802-.836-1.802s1.075.69 1.536 1.24c.265.315.364 1.738.69 2.226.584.872 1.948-.102 1.369.823-.58.924-1.911 1.05-2.976 1.455-.965.367-3.115.86-3.115.86z'
          />
          <path
            fill='url(#cx-d)'
            d='M10.5 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M9.258 7.5 9 8s.84-.19 1.123 0c.384.256.377 1 .377 1h.5s-.164-.73.093-1.243S12 7 12 7V6s-.681.727-1.5 1S9 7 9 7z'
          />
        </g>
      </g>
    </svg>
  )
}
