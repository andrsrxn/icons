import type { Icon } from './types'

export const IconSandstorm: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-sandstorm'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M6.58 5.82h5.63' stroke='currentColor' />
      <path d='M15.07 11.93h3.91' stroke='currentColor' />
      <path d='M5.11 11.93h2.94' stroke='currentColor' />
      <path d='M17.36 18.18h-5.87' stroke='currentColor' />
      <path d='M16.42 5.82h2.72' stroke='currentColor' />
      <path d='M7.68 18.18H4.87' stroke='currentColor' />
      <path
        d='M3.44 5.82a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M21.55 18.18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.05 11.93a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
