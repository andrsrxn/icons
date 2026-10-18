import type { FlagIcon } from './types'

export const IconFlagIM: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'IM',
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
      data-slot='icon-flag-im'
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
            id='im-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='im-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e52d42' />
            <stop offset='1' stopColor='#cb1d31' />
          </linearGradient>
          <linearGradient
            id='im-d'
            x1='10.6'
            x2='10.6'
            y1='2.32'
            y2='13.92'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='im-e'
            x1='9.5'
            x2='9.5'
            y1='2.5'
            y2='11.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f8dd4e' />
            <stop offset='1' stopColor='#f9da38' />
          </linearGradient>
          <clipPath id='im-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='im-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#im-clip)'>
        <g clipPath='url(#im-a)'>
          <path fill='url(#im-b)' d='M21 0H0v15h21z' />
          <path fill='url(#im-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#im-d)'
            fillRule='evenodd'
            d='M16.5 3h-2L13 6.5l-1.5-1s-1.09-2.59-1.5-3-.83-.03-2.13.35-1.35.81-1.86.81c-.2 0-.86-.76-1.23-.98-.54-.34-.73-.18-.6.32.06.22.48.48.75.87C5.3 4.38 5.5 5 5.5 5s.49-.46.75-.53c.4-.11.85.08 1.37 0C8.3 4.37 9 4 9 4l.17 1.9S6.8 8.13 7 9s2.47 1.97 3 2.74-.32 1.06-.32 1.43-.08.87.32.72.45-.8.82-1.38c.26-.4.46-.61.5-.77.09-.39-1.03-1.41-1.64-2.14-.28-.35-.87-.82-.87-.82l1.72-1.28s2.97 1.23 3.64.82S15 4 15 4l2.06-.5z'
            clipRule='evenodd'
          />
          <path
            fill='url(#im-e)'
            fillRule='evenodd'
            d='M11.5 11.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2-8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-6 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2-6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 4c-.28 0-.5-.45-.5-1s.22-1 .5-1 .5.45.5 1-.22 1-.5 1m-5-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
