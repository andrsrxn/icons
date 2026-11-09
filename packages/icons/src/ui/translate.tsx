import type { Icon } from './types'

export const IconTranslate: Icon = ({
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
      data-slot='icon-ui-translate'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M3.02 5.23h12.54' stroke='currentColor' />
      <path d='M9.18 5.23V2.52' stroke='currentColor' />
      <path d='m6.2 8.7 7.82 7.82' stroke='currentColor' />
      <path
        d='M5.18 15.36c2.11-1.16 3.54-2.05 5.04-3.94 1.66-2.07 2.04-3.56 2.67-6.14'
        stroke='currentColor'
      />
      <path
        d='m12.77 21.48 1.95-6.6h0c.95-3.25 1.43-4.87 2.32-4.86s1.32 1.65 2.2 4.92l1.74 6.54'
        stroke='currentColor'
      />
      <path d='M14.31 17.08h5.29' stroke='currentColor' />
    </svg>
  )
}
