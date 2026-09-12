import type { Icon } from './types'

export const IconPyramid: Icon = ({
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
      data-slot='icon-ui-pyramid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M12 22.38V1.35l9.28 14.08z' fill='currentColor' />
      <path d='M12 22.08V2.45' stroke='currentColor' />
      <path
        d='m8.58 5.62-4.05 6.66c-.86 1.43-1.3 2.14-1.17 2.88s.78 1.27 2.08 2.31l4.05 3.27c1.2.97 1.8 1.46 2.51 1.46s1.3-.49 2.51-1.46l4.05-3.27c1.3-1.04 1.95-1.57 2.08-2.3.12-.75-.3-1.46-1.17-2.89l-4.05-6.66h0c-1.53-2.51-2.3-3.77-3.42-3.77s-1.89 1.26-3.42 3.77'
        stroke='currentColor'
      />
    </svg>
  )
}
