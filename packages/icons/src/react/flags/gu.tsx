import type { FlagIcon } from './types'

export const IconFlagGU: FlagIcon = ({
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
  const titleText = title ?? 'GU'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-gu'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='gu-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gu-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#de3149' />
          <stop offset='100%' stopColor='#c2273d' />
        </linearGradient>
        <linearGradient id='gu-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#053b94' />
          <stop offset='100%' stopColor='#002e7a' />
        </linearGradient>
        <linearGradient id='gu-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#de3149' />
          <stop offset='100%' stopColor='#c2273d' />
        </linearGradient>
        <linearGradient id='gu-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#81c1f3' />
          <stop offset='100%' stopColor='#6ab1e9' />
        </linearGradient>
        <linearGradient id='gu-h' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#27a07e' />
          <stop offset='100%' stopColor='#1f9171' />
        </linearGradient>
        <linearGradient id='gu-i' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1e8ce8' />
          <stop offset='100%' stopColor='#107fdc' />
        </linearGradient>
        <linearGradient id='gu-j' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff048' />
          <stop offset='100%' stopColor='#ffef36' />
        </linearGradient>
        <linearGradient id='gu-k' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#8f5715' />
          <stop offset='100%' stopColor='#7a480d' />
        </linearGradient>
        <path id='gu-e' d='M2.5 8.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4' />
        <clipPath id='gu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gu-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gu-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gu-b)' d='M0 0h21v15H0z' />
          <rect width='19' height='13' x='1' y='1' fill='url(#gu-c)' rx='.75' />
          <path
            fill='url(#gu-d)'
            d='M10.5 12s3-2.015 3-4.5-3-4.5-3-4.5-3 2.015-3 4.5 3 4.5 3 4.5'
          />
          <g transform='translate(8 3)'>
            <mask id='gu-g' fill='#fff'>
              <use xlinkHref='#gu-e' />
            </mask>
            <use xlinkHref='#gu-e' fill='url(#gu-a)' />
            <path fill='url(#gu-f)' d='M0 0h5v5H0z' mask='url(#gu-g)' />
            <path
              fill='url(#gu-h)'
              d='m2.5 4.1-.882.614.311-1.029-.856-.649 1.074-.021L2.5 2l.353 1.015 1.074.021-.856.65.31 1.028z'
              mask='url(#gu-g)'
            />
            <path fill='url(#gu-i)' d='M0 5h5v4H0z' mask='url(#gu-g)' />
            <path
              fill='url(#gu-j)'
              d='M0 6s1.59 1.5 2 1.5c.488 0 .496-.723 1-1 .794-.436 2-.5 2-.5v3H0z'
              mask='url(#gu-g)'
            />
          </g>
          <path
            fill='url(#gu-k)'
            fillRule='nonzero'
            d='M10.251 6.475a15 15 0 0 0-.067 1.084c-.01.467.01.812.079 1.02.087.261.284.506.557.742.208.18.415.316.557.397a.25.25 0 0 0 .246-.436 3 3 0 0 1-.477-.34c-.21-.182-.356-.363-.409-.521-.044-.134-.063-.442-.053-.85a14 14 0 0 1 .065-1.046.25.25 0 1 0-.498-.05'
          />
          <path fill='#fff' d='M9 7.5 10 9H9z' />
        </g>
      </g>
    </svg>
  )
}
