import type { Icon } from './types'

export const IconBinary: Icon = ({
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
      data-slot='icon-ui-binary'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect x='2.78' y='3.33' width='4.26' height='7.36' rx='2' stroke='currentColor' />
      <rect x='17.01' y='3.33' width='4.26' height='7.36' rx='2' stroke='currentColor' />
      <rect x='9.95' y='13.64' width='4.26' height='7.36' rx='2' stroke='currentColor' />
      <path
        d='m10 5.6 1.52-1.35c.71-.65 1.07-.97 1.37-.84s.3.61.3 1.58v5.57'
        stroke='currentColor'
      />
      <path
        d='m2.93 15.92 1.52-1.37c.72-.64 1.08-.96 1.37-.83s.3.61.3 1.58v5.57'
        stroke='currentColor'
      />
      <path
        d='m17.07 15.92 1.51-1.37c.72-.64 1.08-.96 1.38-.83s.3.61.3 1.58v5.57'
        stroke='currentColor'
      />
    </svg>
  )
}
