import type { Icon } from './types'

export const IconTextHeadingThree: Icon = ({
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
      data-slot='icon-ui-text-heading-three'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M4.18 4.03v14.74' stroke='currentColor' />
      <path d='M13.28 4.03v14.74' stroke='currentColor' />
      <path d='M4.18 11.3h9.1' stroke='currentColor' />
      <path d='M13.28 4.03v14.74' stroke='currentColor' />
      <path d='M11.83 18.77h2.9' stroke='currentColor' />
      <path d='M11.83 4.03h2.9' stroke='currentColor' />
      <path d='M2.73 4.03h2.9' stroke='currentColor' />
      <path d='M2.73 18.77h2.9' stroke='currentColor' />
      <path
        d='M17.64 15.04a2.2 2.2 0 0 1 1.75-.74c1.57 0 2.04 1.81 1.25 2.54-.8.73-1.95.57-1.95.57'
        stroke='currentColor'
      />
      <path
        d='M17.64 19.8c.43.42.85.75 1.75.75 1.57 0 2.04-1.81 1.25-2.55-.8-.73-1.95-.56-1.95-.56'
        stroke='currentColor'
      />
    </svg>
  )
}
