import type { Icon } from './types'

export const IconCreativeCommons: Icon = ({
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
      data-slot='icon-ui-creative-commons'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'creative-commons-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? (
        <title id={'creative-commons-title'}>{title}</title>
      ) : null}
      <path
        opacity='.2'
        d='M2.57 12a9.43 9.43 0 1 0 18.86 0 9.43 9.43 0 0 0-18.86 0'
        fill='currentColor'
      />
      <path d='M2.57 12A9.4 9.4 0 0 0 12 21.43 9.43 9.43 0 1 0 2.57 12' stroke='currentColor' />
      <path
        d='M10.6 9.3a3.02 3.02 0 1 0 0 5.39m6.87-5.39a3.02 3.02 0 1 0 0 5.39'
        stroke='currentColor'
      />
    </svg>
  )
}
