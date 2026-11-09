import type { Icon } from './types'

export const IconPanelsLeft: Icon = ({
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
      data-slot='icon-ui-panels-left'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.96 10.74c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17H12v18.52h-1.04c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83z'
        fill='currentColor'
      />
      <path
        d='M10.74 21.26h2.53c3.77 0 5.65 0 6.82-1.17 1.18-1.17 1.18-3.06 1.18-6.83v-2.52c0-3.77 0-5.66-1.18-6.83-1.17-1.17-3.05-1.17-6.82-1.17h-2.53c-3.78 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v2.52c0 3.77 0 5.66 1.17 6.83s3.05 1.17 6.82 1.17'
        stroke='currentColor'
      />
      <path d='M12 20.87V3.13' stroke='currentColor' />
    </svg>
  )
}
