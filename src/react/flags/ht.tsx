import type { FlagIcon } from './types'

export const IconFlagHT: FlagIcon = ({
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
  const titleText = title ?? 'HT'

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
        <linearGradient id='ht-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ht-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#112ebc' />
          <stop offset='100%' stopColor='#0620a0' />
        </linearGradient>
        <linearGradient id='ht-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e3264a' />
          <stop offset='100%' stopColor='#d20f34' />
        </linearGradient>
        <path
          id='ht-f'
          d='m0 5 1.105-.553C1.6 4.2 2.443 4 3 4h1.002c.552 0 1.404.202 1.894.447L7 5v1H0z'
        />
        <path
          id='ht-g'
          d='M1 3.006c0-.28.18-.362.39-.193l1.72 1.374a.66.66 0 0 0 .78 0l1.72-1.375c.215-.172.39-.081.39.194v1.488c0 .28-.215.506-.498.506H1.498A.505.505 0 0 1 1 4.494z'
        />
        <rect id='ht-d' width='7' height='6' x='0' y='0' rx='.5' />
        <clipPath id='ht-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ht-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ht-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ht-b)' d='M0 0h21v7H0z' />
          <path fill='url(#ht-c)' d='M0 7h21v8H0z' />
          <g transform='translate(7 5)'>
            <mask id='ht-e' fill='#fff'>
              <use xlinkHref='#ht-d' />
            </mask>
            <use xlinkHref='#ht-d' fill='url(#ht-a)' />
            <g mask='url(#ht-e)'>
              <use xlinkHref='#ht-f' fill='#aabcae' />
              <path
                stroke='#366c14'
                strokeWidth='.5'
                d='M.25 5.155v.595h6.5v-.595l-.967-.484C5.326 4.443 4.513 4.25 4 4.25H2.999c-.516 0-1.321.19-1.782.421z'
              />
            </g>
            <circle cx='3.5' cy='2.5' r='1.5' fill='#d4b872' mask='url(#ht-e)' />
            <g mask='url(#ht-e)'>
              <use xlinkHref='#ht-g' fill='#c28321' />
              <path
                stroke='#0d3488'
                strokeWidth='.5'
                d='M1.25 3.02v1.474c0 .14.114.256.248.256h4.004c.14 0 .248-.11.248-.256V3.02L4.047 4.383a.91.91 0 0 1-1.094 0z'
              />
            </g>
            <path
              fill='#216c30'
              d='M2.172 1.172C2.077 1.077 2.114 1 2.256 1h2.488c.141 0 .175.08.084.172L3.672 2.328a.247.247 0 0 1-.344 0z'
              mask='url(#ht-e)'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
