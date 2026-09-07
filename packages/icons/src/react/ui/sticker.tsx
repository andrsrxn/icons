import type { Icon } from './types'

export const IconSticker: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

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
      data-slot='icon-ui-sticker'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'sticker-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'sticker-title'}>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.56 12A9.44 9.44 0 0 0 12 21.44c2.28 0 .84-5.39 2.47-6.73 2.1-1.73 6.96.22 6.96-2.71a9.44 9.44 0 0 0-18.87 0'
        fill='currentColor'
      />
      <path
        d='M2.57 12a9.4 9.4 0 0 0 9.85 9.43c.58-.03.88-.04 1.36-.24s.8-.48 1.4-1.03a99 99 0 0 0 4.85-4.66c.58-.6.87-.9 1.09-1.37s.24-.77.29-1.35l.03-.78a9.44 9.44 0 0 0-18.87 0'
        stroke='currentColor'
      />
      <path
        d='M21.31 13.29h-.35c-3.75 0-5.62 0-6.79 1.15l-.03.04C13 15.64 13 17.52 13 21.26'
        stroke='currentColor'
      />
    </svg>
  )
}
