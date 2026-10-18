import type { FlagIcon } from './types'

export const IconFlagLB: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'LB',
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
      data-slot='icon-flag-lb'
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
            id='lb-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='lb-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f03340' />
            <stop offset='1' stopColor='#eb212e' />
          </linearGradient>
          <linearGradient
            id='lb-d'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f03340' />
            <stop offset='1' stopColor='#eb212e' />
          </linearGradient>
          <linearGradient
            id='lb-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='lb-f'
            x1='10.5'
            x2='10.5'
            y1='5.18'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1fc065' />
            <stop offset='1' stopColor='#17a555' />
          </linearGradient>
          <clipPath id='lb-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='lb-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lb-clip)'>
        <g clipPath='url(#lb-a)'>
          <path fill='url(#lb-b)' d='M21 0H0v15h21z' />
          <path fill='url(#lb-c)' d='M21 0H0v4h21z' />
          <path fill='url(#lb-d)' d='M21 11H0v4h21z' />
          <path fill='url(#lb-e)' d='M21 4H0v7h21z' />
          <path
            fill='url(#lb-f)'
            fillRule='evenodd'
            d='M9.65 9.35c.2-.2.2-.5 0-.7l.2.2a1 1 0 0 0-.83-.23l-1.04.26c-.26.07-.3-.02-.08-.18l1.2-.9c.22-.16.18-.3-.1-.3h-.5q-.41-.02-.06-.22l1.12-.56q.36-.2-.07-.22h-.48c-.28 0-.33-.14-.1-.3l1.19-.9a.7.7 0 0 1 .8 0l1.2.9c.22.16.18.3-.1.3h-.5q-.41.02-.06.22l1.12.56q.36.2-.07.22h-.48c-.28 0-.33.14-.1.3l1.19.9c.22.16.19.25-.08.18l-1.04-.26a1 1 0 0 0-.83.23l.2-.2c-.2.2-.2.5 0 .7l.3.3c.2.2.13.35-.15.35h-2c-.28 0-.34-.16-.15-.35z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
