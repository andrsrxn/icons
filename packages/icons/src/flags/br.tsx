import type { FlagIcon } from './types'

export const IconFlagBR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'BR',
  'aria-hidden': ariaHidden,
  preserveAspectRatio,
  cover,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)
  const isHidden = ariaHidden === true

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='icon-flag-br'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient
            id='br-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='br-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#05ab41' />
            <stop offset='1' stopColor='#019c39' />
          </linearGradient>
          <linearGradient
            id='br-d'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#053087' />
            <stop offset='1' stopColor='#012877' />
          </linearGradient>
          <clipPath id='br-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='br-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#br-clip)'>
        <g clipPath='url(#br-a)'>
          <path fill='url(#br-b)' d='M21 0H0v15h21z' />
          <path fill='url(#br-c)' d='M21 0H0v15h21z' />
          <path
            fill='#fdd216'
            fillRule='evenodd'
            d='M2.42 7.77c-.23-.15-.23-.4 0-.54l7.66-4.96a.9.9 0 0 1 .84 0l7.66 4.96c.23.15.23.4 0 .54l-7.66 4.96a.9.9 0 0 1-.84 0z'
            clipRule='evenodd'
          />
          <path fill='url(#br-d)' d='M10.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7' />
          <mask
            id='br-e'
            width='7'
            height='7'
            x='7'
            y='4'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M10.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7' />
          </mask>
          <g mask='url(#br-e)'>
            <path
              fill='#fff'
              d='M6.9 6.97q.4-.32 3.53.52c1.48.39 3.18 1.26 3.57 1.74l.31.39.78-.63-.32-.4c-.55-.67-2.42-1.63-4.08-2.07-2.58-.69-3.76-.86-4.42-.32l-.39.31.63.78z'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
