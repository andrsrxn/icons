import type { Icon } from './types'

export const IconBomb: Icon = ({
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
      data-slot='icon-ui-bomb'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='9.35' cy='13.7' r='7.61' fill='currentColor' />
      <circle cx='9.35' cy='13.7' r='7.61' stroke='currentColor' />
      <path d='M5.29 13.02c.2-.82.43-1.27.97-1.92a4 4 0 0 1 2.02-1.42' stroke='currentColor' />
      <path
        d='m16.5 10.88 1.4-1.4c.67-.66 1-1 1-1.4 0-.42-.33-.76-1-1.42l-1.48-1.48c-.66-.67-1-1-1.41-1s-.75.33-1.41 1l-1.4 1.4'
        stroke='currentColor'
      />
      <path
        d='M17.48 5.67c.8-.63 1.11-2.36 2.8-2.29 1.25.06 2.06 1.22 1.98 2.48-.1 1.72-1.18 3.12.13 4.35'
        stroke='currentColor'
      />
    </svg>
  )
}
