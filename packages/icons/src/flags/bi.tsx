import type { FlagIcon } from './types'

export const IconFlagBI: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'BI',
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
      data-slot='icon-flag-bi'
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
            id='bi-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='bi-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e4233b' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='bi-d'
            x1='4.42'
            x2='4.42'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#34cd4e' />
            <stop offset='1' stopColor='#2ab441' />
          </linearGradient>
          <linearGradient
            id='bi-e'
            x1='16.5'
            x2='16.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#34cd4e' />
            <stop offset='1' stopColor='#2ab441' />
          </linearGradient>
          <linearGradient
            id='bi-f'
            x1='10.5'
            x2='10.5'
            y1='-1.44'
            y2='16.43'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='bi-g'
            x1='10.5'
            x2='10.5'
            y1='5.29'
            y2='9.2'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#df2239' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <clipPath id='bi-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='bi-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bi-clip)'>
        <g clipPath='url(#bi-a)'>
          <path fill='url(#bi-b)' d='M21 0H0v15h21z' />
          <path fill='url(#bi-c)' d='M21 0H0v15h21z' />
          <path fill='url(#bi-d)' fillRule='evenodd' d='m-.08 0 9 7.5-9 7.5z' clipRule='evenodd' />
          <path fill='url(#bi-e)' fillRule='evenodd' d='m21 0-9 7.5 9 7.5z' clipRule='evenodd' />
          <path
            fill='url(#bi-f)'
            fillRule='evenodd'
            d='M8.28 4.8-.96-1.45-2.08.22l9.24 6.23a3.5 3.5 0 0 0 0 2.1l-9.24 6.23 1.12 1.65 9.24-6.23a3.5 3.5 0 0 0 4.44 0l9.24 6.23 1.12-1.65-9.24-6.24a3.5 3.5 0 0 0 0-2.09L23.08.22l-1.12-1.66-9.24 6.23a3.5 3.5 0 0 0-4.44 0'
            clipRule='evenodd'
          />
          <path
            fill='url(#bi-g)'
            fillRule='evenodd'
            d='m10.5 6.5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zM9 9l-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm3 0-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
