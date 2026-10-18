import type { FlagIcon } from './types'

export const IconFlagBB: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'BB',
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
      data-slot='icon-flag-bb'
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
            id='bb-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='bb-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1132c7' />
            <stop offset='1' stopColor='#0522a5' />
          </linearGradient>
          <linearGradient
            id='bb-d'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#08379d' />
            <stop offset='1' stopColor='#042a7d' />
          </linearGradient>
          <linearGradient id='bb-e' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#08379d' />
            <stop offset='1' stopColor='#042a7d' />
          </linearGradient>
          <linearGradient
            id='bb-f'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffcc50' />
            <stop offset='1' stopColor='#ffc63c' />
          </linearGradient>
          <linearGradient
            id='bb-g'
            x1='10.5'
            x2='10.5'
            y1='4.62'
            y2='10.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='bb-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='bb-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bb-clip)'>
        <g clipPath='url(#bb-a)'>
          <path fill='url(#bb-b)' d='M21 0H0v15h21z' />
          <path fill='url(#bb-c)' d='M21 0H0v15h21z' />
          <path fill='url(#bb-d)' d='M21 0H10v15h11z' />
          <path fill='url(#bb-e)' d='M7 0H0v15h7z' />
          <path fill='url(#bb-f)' d='M14 0H7v15h7z' />
          <path
            fill='url(#bb-g)'
            fillRule='evenodd'
            d='M10.38 4.7c.08-.1.2-.1.28 0l.7 1.1c.08.1.02.2-.11.2H11q-.23.01-.23.25l.2 2a.3.3 0 0 0 .28.25.7.7 0 0 0 .43-.18l.14-.14c.1-.1.18-.28.18-.43v-.5a.7.7 0 0 0-.18-.43l-.14-.14q-.15-.17.05-.26l1.04-.34q.21-.06.18.17l-.36 2a1 1 0 0 1-.23.42l-.68.66a.7.7 0 0 1-.43.17q-.23.01-.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 0-.25-.25.7.7 0 0 1-.42-.17l-.66-.66a1 1 0 0 1-.22-.42l-.4-2q-.03-.23.18-.17l1.04.34c.13.04.15.16.05.26l-.14.14a.7.7 0 0 0-.18.43v.5c0 .14.08.33.18.43l.14.14c.1.1.3.18.43.18.14 0 .26-.1.27-.25l.2-2A.23.23 0 0 0 10 6h-.25c-.14 0-.18-.1-.1-.2z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
