import type { FlagIcon } from './types'

export const IconFlagHK: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'HK',
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
      data-slot='icon-flag-hk'
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
            id='hk-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='hk-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f0371d' />
            <stop offset='1' stopColor='#de290f' />
          </linearGradient>
          <linearGradient
            id='hk-d'
            x1='10.67'
            x2='10.67'
            y1='3.2'
            y2='11.82'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='hk-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='hk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#hk-clip)'>
        <g clipPath='url(#hk-a)'>
          <path fill='url(#hk-b)' d='M21 0H0v15h21z' />
          <path fill='url(#hk-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#hk-d)'
            fillRule='evenodd'
            d='M12 7.2c-.8-.5-1 .4-1 0 0-.84.9-1.5 2-1.5s2 .66 2 1.5c-.95 0-1.04.5-1.5.5-.56 0-.7 0-1.5-.5m1.25-.2a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5m-1.81 1.96c.23-.91-.7-.82-.31-.95.79-.25 1.7.39 2.04 1.44s-.02 2.11-.8 2.37c-.3-.9-.8-.84-.94-1.28-.18-.53-.22-.66 0-1.58M12 10.1a.25.25 0 1 0 .47-.15.25.25 0 0 0-.47.15M9.58 8.98c.94-.07.57-.92.8-.6.5.68.17 1.75-.73 2.4s-2.01.63-2.5-.04c.77-.56.55-1.02.92-1.29.46-.33.57-.4 1.51-.47m-.9.89a.25.25 0 1 0 .3.4.25.25 0 0 0-.3-.4M9 7.2c.35.88 1.05.26.81.6-.49.66-1.6.68-2.5.03s-1.22-1.72-.73-2.39c.76.56 1.13.2 1.5.48.46.33.57.41.92 1.28m-1.12-.58a.25.25 0 1 0-.3.4.25.25 0 0 0 .3-.4m2.62-.52c-.72.6.08 1.08-.31.95-.79-.26-1.15-1.31-.81-2.37.34-1.05 1.26-1.69 2.05-1.43-.3.9.15 1.14 0 1.58-.17.53-.21.67-.93 1.27m.2-1.25a.25.25 0 1 0-.47-.15.25.25 0 0 0 .47.15'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
