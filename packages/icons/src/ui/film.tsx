import type { Icon } from './types'

export const IconFilm: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-film'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.72 21.23c.3 0 .44 0 .57-.03a1 1 0 0 0 .72-.73c.03-.12.03-.27.03-.56V4.09c0-.3 0-.44-.03-.56a1 1 0 0 0-.72-.73c-.13-.03-.27-.03-.57-.03-.89 0-1.33 0-1.7.1a3 3 0 0 0-2.16 2.16c-.1.37-.1.81-.1 1.7v10.54c0 .89 0 1.33.1 1.7a3 3 0 0 0 2.17 2.16c.36.1.8.1 1.7.1'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M17.2 21.23c-.3 0-.44 0-.56-.03a1 1 0 0 1-.72-.73c-.03-.12-.03-.27-.03-.56V4.09c0-.3 0-.44.03-.56a1 1 0 0 1 .72-.73c.12-.03.27-.03.56-.03.89 0 1.33 0 1.7.1a3 3 0 0 1 2.16 2.16c.1.37.1.81.1 1.7v10.54c0 .89 0 1.33-.1 1.7a3 3 0 0 1-2.16 2.16c-.37.1-.8.1-1.7.1'
        fill='currentColor'
      />
      <rect
        width='18.45'
        height='18.47'
        rx='3'
        transform='scale(1 -1)rotate(90 21.23 0)'
        stroke='currentColor'
      />
      <path d='M20.85 12H3.15' stroke='currentColor' />
      <path d='M8.04 2.77v17.7' stroke='currentColor' />
      <path d='M15.89 2.77v17.7' stroke='currentColor' />
      <path d='M7.52 7.39H2.77' stroke='currentColor' />
      <path d='M7.7 16.61H3.15' stroke='currentColor' />
      <path d='M21.23 7.39h-4.75' stroke='currentColor' />
      <path d='M20.85 16.61H16.3' stroke='currentColor' />
    </svg>
  )
}
