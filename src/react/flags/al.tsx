import type { FlagIcon } from './types'

export const IconFlagAL: FlagIcon = ({
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
  const titleText = title ?? 'AL'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-al'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='al-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='al-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ee343c' />
          <stop offset='100%' stopColor='#e2222a' />
        </linearGradient>
        <linearGradient id='al-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='al-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#al-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#al-a)' d='M0 0h21v15H0z' />
          <path fill='url(#al-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#al-c)'
            d='m9.348 3.348.804.804a.496.496 0 0 0 .696 0l.804-.804a.63.63 0 0 1 .758-.075L13.5 4l-1.548.774a.89.89 0 0 0-.452.726c0 .268.224.5.5.5.268 0 .699-.1.944-.222l1.112-.556a.73.73 0 0 1 .794.128l.3.3c.194.194.151.45-.094.572l-1.112.556c-.245.122-.26.344-.034.495l.68.454c.226.15.194.316-.072.37l-1.536.307c-.269.053-.3.232-.077.4l1.19.892c.22.166.181.304-.095.304-.268 0-.717-.054-.984-.121l-1.032-.258c-.27-.067-.362.063-.21.289l.453.68c.15.226.046.41-.235.41h-.484a.74.74 0 0 0-.666.475l-.184.55c-.088.266-.229.263-.316 0l-.184-.55A.74.74 0 0 0 9.492 11h-.484c-.287 0-.386-.184-.235-.41l.454-.68c.15-.226.056-.356-.211-.289l-1.032.258A5 5 0 0 1 7 10c-.268 0-.319-.136-.095-.304l1.19-.892c.22-.166.19-.347-.077-.4l-1.536-.308c-.269-.053-.298-.218-.072-.37l.68-.453c.226-.15.211-.372-.034-.495l-1.112-.556c-.245-.122-.287-.379-.094-.572l.3-.3a.73.73 0 0 1 .794-.128l1.112.556C8.301 5.9 8.724 6 9 6c.268 0 .5-.224.5-.5 0-.268-.199-.6-.444-.722l-1.112-.556c-.245-.122-.26-.344-.034-.495l.68-.454a.626.626 0 0 1 .758.075'
          />
        </g>
      </g>
    </svg>
  )
}
