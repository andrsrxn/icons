import type { Icon } from './types'

export const IconTextHighlight: Icon = ({
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
      data-slot='icon-ui-text-highlight'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M19.37 21.35c.24 0 .36 0 .46-.02a1.5 1.5 0 0 0 1.29-1.28v-.92a1.5 1.5 0 0 0-1.29-1.28c-.1-.02-.22-.02-.46-.02H4.63c-.24 0-.36 0-.46.02a1.5 1.5 0 0 0-1.29 1.28v.92c.1.67.62 1.2 1.29 1.28.1.02.22.02.46.02z'
        fill='currentColor'
      />
      <path
        d='m2.87 19.59.01-.46a1.5 1.5 0 0 1 1.29-1.28c.1-.02.22-.02.46-.02h14.74c.24 0 .36 0 .46.02.67.09 1.2.61 1.29 1.28v.92a1.5 1.5 0 0 1-1.29 1.28c-.1.02-.22.02-.46.02H4.63c-.24 0-.36 0-.46-.02a1.5 1.5 0 0 1-1.29-1.28z'
        stroke='currentColor'
      />
      <path
        d='m7.66 14.51 2.06-6.98h0c1-3.43 1.51-5.15 2.45-5.14s1.4 1.74 2.33 5.2h0l1.84 6.92'
        stroke='currentColor'
      />
      <path d='M9.29 9.86h5.6' stroke='currentColor' />
    </svg>
  )
}
