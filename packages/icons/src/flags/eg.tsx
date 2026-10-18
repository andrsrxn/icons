import type { FlagIcon } from './types'

export const IconFlagEG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'EG',
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
      data-slot='icon-flag-eg'
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
            id='eg-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='eg-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e41d33' />
            <stop offset='1' stopColor='#ce1126' />
          </linearGradient>
          <linearGradient
            id='eg-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='eg-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='eg-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='eg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#eg-clip)'>
        <g clipPath='url(#eg-a)'>
          <path fill='url(#eg-b)' d='M21 0H0v15h21z' />
          <path fill='url(#eg-c)' d='M21 0H0v5h21z' />
          <path fill='url(#eg-d)' d='M21 10H0v5h21z' />
          <path fill='url(#eg-e)' d='M21 5H0v5h21z' />
          <path
            fill='#f4b32e'
            fillOpacity='.25'
            fillRule='evenodd'
            d='M8 6.5c0-.28.23-.5.5-.5h.25c.14 0 .3.1.37.23L9.5 7s.55-1 1-1c.5 0 1 1 1 1l.38-.77a.4.4 0 0 1 .37-.23h.25c.28 0 .5.22.5.5v2c0 .28-.18.38-.41.23L11.5 8H11v.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V8h-.5l-1.09.73c-.23.15-.41.05-.41-.23z'
            clipRule='evenodd'
          />
          <path
            fill='#c6a846'
            d='M12.5 8.07V6.5h-.2l-.53 1.08zM8.7 6.5h-.2v1.57l.73-.5zm1.8 1h.7l-.15-.28a3 3 0 0 0-.26-.42l-.27-.29q-.12.08-.3.3-.19.26-.28.43l-.14.26zm.87-.72.13.22.11-.22s.23-.2.16-.32l.11-.23a.4.4 0 0 1 .37-.23h.25c.28 0 .5.22.5.5v2c0 .28-.18.38-.41.23L11.5 8H11v.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V8h-.5l-1.09.73c-.23.15-.41.05-.41-.23v-2c0-.28.23-.5.5-.5h.25c.14 0 .3.1.37.23l.12.24c-.08.11.14.3.14.3L9.5 7l.14-.23.18-.25c.2-.26.45-.52.68-.52.25 0 .5.25.69.5z'
          />
        </g>
      </g>
    </svg>
  )
}
