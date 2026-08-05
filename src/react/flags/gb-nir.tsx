import type { FlagIcon } from './types'

export const IconFlagGBNIR: FlagIcon = ({
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
  const titleText = title ?? 'GB-NIR'

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
        <linearGradient id='gb-nir-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gb-nir-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e82739' />
          <stop offset='100%' stopColor='#ca1a2b' />
        </linearGradient>
        <linearGradient id='gb-nir-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e6101e' />
          <stop offset='100%' stopColor='#ca0814' />
        </linearGradient>
        <linearGradient id='gb-nir-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd148' />
          <stop offset='100%' stopColor='#ffcb2f' />
        </linearGradient>
        <path
          id='gb-nir-d'
          d='M9 3.75 10 4l.5-.5.5.5 1-.25-.404 1.009a.4.4 0 0 1-.341.241h-1.51a.39.39 0 0 1-.341-.241zM10.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
        />
        <clipPath id='gb-nir-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gb-nir-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gb-nir-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gb-nir-b)' d='M9 6H0v3h9v6h3V9h9V6h-9V0H9z' />
          <path
            fill='url(#gb-nir-a)'
            d='M11.516 9.26 10.5 11 9.484 9.26l-2.015-.01.998-1.75-.998-1.75 2.015-.01L10.5 4l1.016 1.74 2.015.01-.998 1.75.998 1.75z'
          />
          <path
            fill='url(#gb-nir-c)'
            d='M9.55 7.006a.66.66 0 0 1 .425-.664l.55-.184c.263-.087.475.063.475.35V7.5s.321-1.037.5-.5-.128 1.526-.128 1.526a.67.67 0 0 1-.63.474h-.484c-.28 0-.531-.23-.559-.506z'
          />
          <path
            fill='url(#gb-nir-a)'
            fillRule='nonzero'
            d='M10.5 2.908c-.511 0-.967.304-1.168.763l-.1.229.457.201.1-.229a.775.775 0 0 1 1.418-.005l.102.228.456-.205-.102-.228a1.27 1.27 0 0 0-1.164-.754'
          />
          <mask id='gb-nir-f' fill='#fff'>
            <use xlinkHref='#gb-nir-d' />
          </mask>
          <use xlinkHref='#gb-nir-d' fill='url(#gb-nir-e)' />
          <circle cx='10.5' cy='4.5' r='1' fill='#5169e2' mask='url(#gb-nir-f)' />
          <circle cx='11.5' cy='4.5' r='1' fill='#d34d43' mask='url(#gb-nir-f)' />
          <circle cx='9.5' cy='4.5' r='1' fill='#d34d43' mask='url(#gb-nir-f)' />
        </g>
      </g>
    </svg>
  )
}
