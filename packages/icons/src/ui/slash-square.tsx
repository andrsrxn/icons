import type { Icon } from './types'

export const IconSlashSquare: Icon = ({
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
      data-slot='icon-ui-slash-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.06 2.8c3.77 0 5.66 0 6.83 1.17s1.17 3.05 1.17 6.82v2.42c0 3.77 0 5.65-1.17 6.82-1.17 1.18-3.06 1.18-6.83 1.18h-2.41c-3.77 0-5.66 0-6.83-1.18-1.17-1.17-1.17-3.05-1.17-6.82v-2.42c0-3.77 0-5.65 1.17-6.82 1.17-1.18 3.06-1.18 6.83-1.18z'
        fill='currentColor'
      />
      <path
        d='M2.65 10.8v2.4c0 3.78 0 5.66 1.17 6.83 1.17 1.18 3.06 1.18 6.83 1.18h2.4c3.78 0 5.67 0 6.84-1.18 1.17-1.17 1.17-3.05 1.17-6.82v-2.42c0-3.77 0-5.65-1.17-6.82-1.17-1.18-3.06-1.18-6.83-1.18h-2.41c-3.77 0-5.66 0-6.83 1.18-1.17 1.17-1.17 3.05-1.17 6.82'
        stroke='currentColor'
      />
      <path d='m16.69 7.02-9.96 9.96' stroke='currentColor' />
    </svg>
  )
}
