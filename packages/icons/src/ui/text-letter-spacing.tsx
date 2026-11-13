import type { Icon } from './types'

export const IconTextLetterSpacing: Icon = ({
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
      data-slot='icon-ui-text-letter-spacing'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M2.83 2.6v18.8' stroke='currentColor' />
      <path d='M21.17 2.6v18.8' stroke='currentColor' />
      <path
        d='m7.35 18.15 2.2-7.48h0c1.08-3.69 1.63-5.53 2.63-5.51 1.01 0 1.5 1.86 2.5 5.57l1.97 7.42'
        stroke='currentColor'
      />
      <path d='M9.1 13.16h5.99' stroke='currentColor' />
    </svg>
  )
}
