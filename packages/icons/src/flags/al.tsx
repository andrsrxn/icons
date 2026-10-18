import type { FlagIcon } from './types'

export const IconFlagAL: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AL',
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
      data-slot='icon-flag-al'
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
            id='al-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='al-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ee343c' />
            <stop offset='1' stopColor='#e2222a' />
          </linearGradient>
          <linearGradient
            id='al-d'
            x1='10.5'
            x2='10.5'
            y1='3.18'
            y2='12.22'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='al-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='al-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#al-clip)'>
        <g clipPath='url(#al-a)'>
          <path fill='url(#al-b)' d='M21 0H0v15h21z' />
          <path fill='url(#al-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#al-d)'
            fillRule='evenodd'
            d='m9.35 3.35.8.8c.19.19.5.2.7 0l.8-.8a.6.6 0 0 1 .76-.08L13.5 4l-1.55.77a.9.9 0 0 0-.45.73c0 .27.22.5.5.5.27 0 .7-.1.94-.22l1.12-.56c.24-.12.6-.06.79.13l.3.3c.2.2.15.45-.1.57l-1.1.56c-.25.12-.27.34-.04.5l.68.45c.23.15.2.31-.07.37l-1.54.3c-.27.06-.3.24-.08.4l1.2.9c.22.16.18.3-.1.3a5 5 0 0 1-.98-.12l-1.04-.26c-.27-.07-.36.06-.2.29l.45.68c.15.23.04.41-.24.41h-.48a.7.7 0 0 0-.67.47l-.18.56q-.17.39-.32 0l-.18-.56a.7.7 0 0 0-.67-.47h-.48c-.29 0-.39-.18-.24-.41l.46-.68c.15-.23.05-.36-.21-.29l-1.04.26c-.27.07-.7.12-.98.12-.27 0-.32-.14-.1-.3l1.2-.9c.22-.16.18-.34-.08-.4l-1.54-.3c-.27-.06-.3-.22-.07-.37l.68-.46c.23-.15.21-.37-.03-.5l-1.12-.55c-.24-.12-.28-.38-.09-.57l.3-.3c.2-.2.55-.25.8-.13l1.1.56c.25.12.67.22.95.22a.5.5 0 0 0 .5-.5.9.9 0 0 0-.44-.72l-1.12-.56c-.24-.12-.26-.34-.03-.5l.68-.45a.6.6 0 0 1 .76.08'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
