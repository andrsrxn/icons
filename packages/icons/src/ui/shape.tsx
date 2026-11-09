import type { Icon } from './types'

export const IconShape: Icon = ({
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
      data-slot='icon-ui-shape'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M7.72 22.28H9.1c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.13V14.9c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.7c-2.82 0-4.24 0-5.12.88s-.87 2.3-.87 5.12v1.4c0 2.82 0 4.24.87 5.12.88.87 2.3.87 5.13.87'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M15.1 16.07s.52-5.59-.77-6.84c-1.34-1.3-6.4-.34-6.4-.34a7.18 7.18 0 1 1 7.18 7.18'
        fill='currentColor'
      />
      <path d='M7.93 8.9a7.18 7.18 0 1 1 7.18 7.17' stroke='currentColor' />
    </svg>
  )
}
