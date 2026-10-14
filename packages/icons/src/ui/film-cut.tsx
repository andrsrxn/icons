import type { Icon } from './types'

export const IconFilmCut: Icon = ({
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
      data-slot='icon-ui-film-cut'
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
        d='M17.2 21.23c-.3 0-.44 0-.56-.03a1 1 0 0 1-.72-.73c-.03-.12-.03-.27-.03-.56V4.09c0-.3 0-.44.03-.56a1 1 0 0 1 .72-.73c.12-.03.27-.03.56-.03.89 0 1.33 0 1.7.1a3 3 0 0 1 2.16 2.16c.1.37.1.81.1 1.7v10.54c0 .89 0 1.33-.1 1.7a3 3 0 0 1-2.16 2.16c-.37.1-.81.1-1.7.1'
        fill='currentColor'
      />
      <path
        d='M7.96 2.77c-2.05 0-3.08 0-3.82.48a3 3 0 0 0-.9.9c-.47.74-.47 1.76-.47 3.82v8.06c0 2.06 0 3.08.48 3.83a3 3 0 0 0 .89.89c.74.48 1.77.48 3.82.48'
        stroke='currentColor'
      />
      <path
        d='M16.04 2.77c2.05 0 3.08 0 3.82.48a3 3 0 0 1 .9.9c.47.74.47 1.76.47 3.82v8.06c0 2.06 0 3.08-.48 3.83a3 3 0 0 1-.89.89c-.74.48-1.77.48-3.82.48'
        stroke='currentColor'
      />
      <path d='M8.04 12H2.77' stroke='currentColor' />
      <path d='M20.78 12h-4.9' stroke='currentColor' />
      <path d='M8.04 2.77v18.46' stroke='currentColor' />
      <path d='M15.89 2.77v18.46' stroke='currentColor' />
      <path d='M7.52 7.39H2.77' stroke='currentColor' />
      <path d='M7.7 16.61H3.15' stroke='currentColor' />
      <path d='M20.85 7.39H16.1' stroke='currentColor' />
      <path d='M20.85 16.61H16.3' stroke='currentColor' />
      <path d='M12 1.53v2.82' stroke='currentColor' />
      <path d='M12 7.62v2.83' stroke='currentColor' />
      <path d='M12 13.79v2.82' stroke='currentColor' />
      <path d='M12 19.81v2.83' stroke='currentColor' />
    </svg>
  )
}
