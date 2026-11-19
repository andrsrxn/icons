import type { Icon } from './types'

export const IconTextUnderlineWave: Icon = ({
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
      data-slot='icon-ui-text-underline-wave'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M7.22 3.52v6.32c0 1.68 0 6.7 4.72 6.7 4.84 0 4.84-4.9 4.84-6.7V3.52'
        stroke='currentColor'
      />
      <path
        d='m4.25 21.19 1.3-1.06a1.5 1.5 0 0 1 1.87-.02l.9.7c.54.42 1.3.42 1.84 0l.92-.72a1.5 1.5 0 0 1 1.84 0l.92.72c.54.42 1.3.42 1.84 0l.8-.62c.64-.5 1.45-.5 2.1 0l1.23 1'
        stroke='currentColor'
      />
    </svg>
  )
}
