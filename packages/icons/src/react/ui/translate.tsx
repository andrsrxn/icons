import type { Icon } from './types'

export const IconTranslate: Icon = ({
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
      data-slot='icon-ui-translate'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.7 5.48h11.88' stroke='currentColor' />
      <path d='M8.64 5.48V2.86' stroke='currentColor' />
      <path d='m5.77 8.82 7.54 7.53' stroke='currentColor' />
      <path
        d='M4.78 15.24c2.04-1.12 3.42-1.98 4.86-3.8 1.6-2 1.97-3.43 2.57-5.92'
        stroke='currentColor'
      />
      <path
        d='m11.86 21.14 2.86-7.9c.79-2.2 1.18-3.3 1.88-3.29s1.1 1.1 1.88 3.29l2.82 7.9'
        stroke='currentColor'
      />
      <path d='M19.37 16.56H13.9' stroke='currentColor' />
    </svg>
  )
}
