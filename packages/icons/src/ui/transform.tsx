import type { Icon } from './types'

export const IconTransform: Icon = ({
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
      data-slot='icon-ui-transform'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.68' y='2.65' width='8.32' height='8.32' rx='2' fill='currentColor' />
      <circle opacity='.2' cx='17.16' cy='17.19' r='4.11' fill='currentColor' />
      <rect x='2.68' y='2.65' width='8.32' height='8.32' rx='2' stroke='currentColor' />
      <path d='M14.05 4.24h.23c1.88 0 2.82 0 3.4.59.6.58.6 1.53.6 3.41v1' stroke='currentColor' />
      <path
        d='M9.95 19.7h-.23c-1.88 0-2.82 0-3.41-.6-.59-.58-.59-1.52-.59-3.4v-1'
        stroke='currentColor'
      />
      <path
        d='M20.9 7.96c-1.08 1.07-1.61 1.6-2.27 1.7a2 2 0 0 1-.6 0c-.64-.1-1.18-.63-2.26-1.7'
        stroke='currentColor'
      />
      <path
        d='M3.1 15.98c1.08-1.08 1.61-1.62 2.27-1.71a2 2 0 0 1 .6 0c.64.1 1.18.63 2.26 1.7'
        stroke='currentColor'
      />
      <circle cx='17.16' cy='17.19' r='4.11' stroke='currentColor' />
    </svg>
  )
}
