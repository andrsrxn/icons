import type { FlagIcon } from './types'

export const IconFlagGU: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GU',
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
      data-slot='icon-flag-gu'
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
            id='gu-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gu-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#de3149' />
            <stop offset='1' stopColor='#c2273d' />
          </linearGradient>
          <linearGradient
            id='gu-d'
            x1='10.5'
            x2='10.5'
            y1='1'
            y2='14'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#053b94' />
            <stop offset='1' stopColor='#002e7a' />
          </linearGradient>
          <linearGradient
            id='gu-e'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#de3149' />
            <stop offset='1' stopColor='#c2273d' />
          </linearGradient>
          <linearGradient
            id='gu-f'
            x1='10.5'
            x2='10.5'
            y1='3.5'
            y2='11.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gu-h'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#81c1f3' />
            <stop offset='1' stopColor='#6ab1e9' />
          </linearGradient>
          <linearGradient
            id='gu-j'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='7.71'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#27a07e' />
            <stop offset='1' stopColor='#1f9171' />
          </linearGradient>
          <linearGradient
            id='gu-l'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1e8ce8' />
            <stop offset='1' stopColor='#107fdc' />
          </linearGradient>
          <linearGradient
            id='gu-n'
            x1='10.5'
            x2='10.5'
            y1='9'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff048' />
            <stop offset='1' stopColor='#ffef36' />
          </linearGradient>
          <linearGradient
            id='gu-o'
            x1='10.97'
            x2='10.97'
            y1='6.25'
            y2='9.75'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#8f5715' />
            <stop offset='1' stopColor='#7a480d' />
          </linearGradient>
          <clipPath id='gu-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gu-clip)'>
        <g clipPath='url(#gu-a)'>
          <path fill='url(#gu-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gu-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#gu-d)'
            d='M19.25 1H1.75a.75.75 0 0 0-.75.75v11.5c0 .41.34.75.75.75h17.5c.41 0 .75-.34.75-.75V1.75a.75.75 0 0 0-.75-.75'
          />
          <path
            fill='url(#gu-e)'
            fillRule='evenodd'
            d='M10.5 12s3-2.01 3-4.5-3-4.5-3-4.5-3 2.01-3 4.5 3 4.5 3 4.5'
            clipRule='evenodd'
          />
          <path fill='url(#gu-f)' d='M10.5 11.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4' />
          <mask id='gu-g' width='5' height='9' x='8' y='3' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M10.5 11.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4' />
          </mask>
          <g mask='url(#gu-g)'>
            <path fill='url(#gu-h)' d='M13 3H8v5h5z' />
          </g>
          <mask id='gu-i' width='5' height='9' x='8' y='3' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M10.5 11.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4' />
          </mask>
          <g mask='url(#gu-i)'>
            <path
              fill='url(#gu-j)'
              fillRule='evenodd'
              d='m10.5 7.1-.88.61.3-1.02-.85-.65L10.15 6l.35-1 .35 1.01 1.08.03-.86.65.31 1.02z'
              clipRule='evenodd'
            />
          </g>
          <mask id='gu-k' width='5' height='9' x='8' y='3' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M10.5 11.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4' />
          </mask>
          <g mask='url(#gu-k)'>
            <path fill='url(#gu-l)' d='M13 8H8v4h5z' />
          </g>
          <mask id='gu-m' width='5' height='9' x='8' y='3' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M10.5 11.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4' />
          </mask>
          <g mask='url(#gu-m)'>
            <path
              fill='url(#gu-n)'
              fillRule='evenodd'
              d='M8 9s1.59 1.5 2 1.5c.49 0 .5-.72 1-1 .8-.44 2-.5 2-.5v3H8z'
              clipRule='evenodd'
            />
          </g>
          <path
            fill='url(#gu-o)'
            d='m10.25 6.48-.07 1.08q-.01.7.08 1.02.14.38.56.74.32.28.56.4a.25.25 0 1 0 .24-.44 2 2 0 0 1-.47-.34 1.3 1.3 0 0 1-.41-.52 3 3 0 0 1-.06-.85l.07-1.04a.25.25 0 1 0-.5-.05'
          />
          <path fill='#fff' fillRule='evenodd' d='M9 7.5 10 9H9z' clipRule='evenodd' />
        </g>
      </g>
    </svg>
  )
}
