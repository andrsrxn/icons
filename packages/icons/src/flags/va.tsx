import type { FlagIcon } from './types'

export const IconFlagVA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'VA',
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
      data-slot='icon-flag-va'
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
            id='va-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='va-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fde048' />
            <stop offset='1' stopColor='#ffdf32' />
          </linearGradient>
          <linearGradient
            id='va-d'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='va-e'
            x1='15.9'
            x2='15.9'
            y1='11.21'
            y2='5.46'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#cdcccc' />
            <stop offset='1' stopColor='#e4e4e4' />
          </linearGradient>
          <linearGradient
            id='va-f'
            x1='15.1'
            x2='15.1'
            y1='11.21'
            y2='5.46'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#cd9d25' />
            <stop offset='1' stopColor='#ebb93a' />
          </linearGradient>
          <linearGradient
            id='va-g'
            x1='15.5'
            x2='15.5'
            y1='2'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#cd9d25' />
            <stop offset='1' stopColor='#ebb93a' />
          </linearGradient>
          <linearGradient
            id='va-h'
            x1='15.5'
            x2='15.5'
            y1='10'
            y2='12.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f5252c' />
            <stop offset='1' stopColor='#f6151c' />
          </linearGradient>
          <clipPath id='va-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='va-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#va-clip)'>
        <g clipPath='url(#va-a)'>
          <path fill='url(#va-b)' d='M21 0H0v15h21z' />
          <path fill='url(#va-c)' d='M21 0H0v15h21z' />
          <path fill='url(#va-d)' d='M21 0H10v15h11z' />
          <path
            fill='url(#va-e)'
            fillRule='evenodd'
            d='M18.68 8.65a1.5 1.5 0 1 1-2.41.41l-2.18-2.18-.36.35-.35.36-.7-.71.35-.35.7-.71.36-.36.35.36 2.53 2.53a1.5 1.5 0 0 1 1.71.3'
            clipRule='evenodd'
          />
          <path
            fill='url(#va-f)'
            fillRule='evenodd'
            d='M14.03 8.35a1.5 1.5 0 1 0 .7.71l2.18-2.18.36.35.35.36.7-.71-.35-.35-.7-.71-.36-.36-.35.36z'
            clipRule='evenodd'
          />
          <path
            fill='url(#va-g)'
            fillRule='evenodd'
            d='M15.5 5c-.83 0-1.5-.22-1.5-.5s.67-.5 1.5-.5 1.5.22 1.5.5-.67.5-1.5.5m0-2.5c-.41 0-.75-.11-.75-.25s.34-.25.75-.25.75.11.75.25-.34.25-.75.25m0 1.17c-.55 0-1-.15-1-.34 0-.18.45-.33 1-.33s1 .15 1 .33-.45.34-1 .34'
            clipRule='evenodd'
          />
          <path
            fill='url(#va-h)'
            d='M13.03 10.66q.11.38.52.91c.48.58 1.13.93 1.95.93s1.47-.35 1.95-.93q.41-.53.52-.91a.5.5 0 1 0-.94-.32q-.07.23-.35.59-.44.55-1.18.57-.74 0-1.18-.57-.28-.36-.35-.59a.5.5 0 0 0-.94.32'
          />
        </g>
      </g>
    </svg>
  )
}
