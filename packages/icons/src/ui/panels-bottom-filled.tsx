import type { Icon } from './types'

export const IconPanelsBottomFilled: Icon = ({
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
      data-slot='icon-ui-panels-bottom-filled'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M13.26 2.96c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83V12H2.74v-1.04c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17z'
        fill='currentColor'
      />
      <path
        d='M2.74 10.73v2.53c0 3.78 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h2.52c3.77 0 5.66 0 6.83-1.17s1.17-3.05 1.17-6.83v-2.53c0-3.77 0-5.65-1.17-6.82-1.17-1.18-3.06-1.18-6.83-1.18h-2.52c-3.77 0-5.66 0-6.83 1.18-1.17 1.17-1.17 3.05-1.17 6.82'
        stroke='currentColor'
      />
      <path d='M3.13 12h17.74' stroke='currentColor' />
    </svg>
  )
}
