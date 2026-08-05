import type { FlagIcon } from './types'

export const IconFlagBB: FlagIcon = ({
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
  const titleText = title ?? 'BB'

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
        <linearGradient id='bb-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='bb-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1132c7' />
          <stop offset='100%' stopColor='#0522a5' />
        </linearGradient>
        <linearGradient id='bb-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#08379d' />
          <stop offset='100%' stopColor='#042a7d' />
        </linearGradient>
        <linearGradient id='bb-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffcc50' />
          <stop offset='100%' stopColor='#ffc63c' />
        </linearGradient>
        <linearGradient id='bb-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='bb-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bb-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#bb-a)' d='M0 0h21v15H0z' />
          <path fill='url(#bb-b)' d='M0 0h21v15H0z' />
          <path fill='url(#bb-c)' d='M10 0h11v15H10z' />
          <path fill='url(#bb-c)' d='M0 0h7v15H0z' />
          <path fill='url(#bb-d)' d='M7 0h7v15H7z' />
          <path
            fill='url(#bb-e)'
            d='M10.378 4.709c.079-.116.206-.11.278 0l.708 1.082c.075.116.019.209-.118.209h-.242a.22.22 0 0 0-.23.249l.201 2.002c.014.138.141.249.275.249a.7.7 0 0 0 .43-.179l.14-.137c.1-.099.18-.286.18-.432v-.498a.7.7 0 0 0-.18-.435l-.14-.138c-.1-.1-.082-.214.054-.26l1.032-.343c.13-.043.214.03.188.17l-.368 2.003a.9.9 0 0 1-.227.423l-.678.652a.73.73 0 0 1-.431.174.247.247 0 0 0-.25.252v.496c0 .139-.107.252-.252.252h-.496a.25.25 0 0 1-.252-.252v-.496a.254.254 0 0 0-.25-.252.7.7 0 0 1-.424-.174l-.652-.652a.96.96 0 0 1-.224-.423l-.4-2.002c-.028-.138.048-.216.184-.17l1.032.343c.13.043.156.156.053.259l-.138.138c-.1.1-.181.289-.181.435v.498c0 .14.078.33.18.432l.14.137c.1.1.296.179.43.179.138 0 .26-.107.275-.249l.2-2.002A.225.225 0 0 0 9.996 6h-.242c-.14 0-.187-.098-.112-.209z'
          />
        </g>
      </g>
    </svg>
  )
}
