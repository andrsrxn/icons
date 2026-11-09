import type { Icon } from './types'

export const IconTextReplace: Icon = ({
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
      data-slot='icon-ui-text-replace'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M10.67 18.46H8.3a5.06 5.06 0 0 1-3-9.12L5.76 9' stroke='currentColor' />
      <path
        d='m9.46 20.65.07-.06c1-1 1.5-1.5 1.5-2.12s-.5-1.13-1.5-2.13l-.07-.07'
        stroke='currentColor'
      />
      <path
        d='M16.25 13.75h1.34c1.09 0 1.97.88 1.97 1.97 0 1.1-.66 1.97-2.43 1.97h.74a2.3 2.3 0 1 1 0 4.6h-1.51m.03 0c-.64 0-.96 0-1.19-.16a1 1 0 0 1-.21-.21c-.16-.23-.16-.55-.16-1.19v-5.42c0-.64 0-.96.16-1.18a1 1 0 0 1 .21-.22c.23-.16.55-.16 1.19-.16'
        stroke='currentColor'
      />
      <path
        d='m9.55 10.63 1.51-5.15h0c.74-2.53 1.12-3.8 1.81-3.79.7.01 1.03 1.29 1.71 3.84l1.36 5.1'
        stroke='currentColor'
      />
      <path d='M10.75 7.2h4.12' stroke='currentColor' />
    </svg>
  )
}
