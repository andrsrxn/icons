import type { Icon } from './types'

export const IconBookDashed: Icon = ({
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
      data-slot='icon-ui-book-dashed'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.02 5.74c0-1.89 0-2.83.59-3.42.58-.58 1.52-.58 3.41-.58h9.96c1.89 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v8.75c0 1.89 0 2.83-.59 3.42-.58.58-1.52.58-3.41.58H5.02c-.94 0-1.41 0-1.7-.29-.3-.3-.3-.76-.3-1.7z'
        fill='currentColor'
      />
      <path d='M8.03 4.27v1.4' stroke='currentColor' />
      <path d='M8.03 8.37v1.4' stroke='currentColor' />
      <path d='M6.18 1.8h-.07l-.27.01a3 3 0 0 0-2.9 2.86v.26' stroke='currentColor' />
      <path d='M17.82 1.8h.07l.27.01a3 3 0 0 1 2.9 2.86v.26' stroke='currentColor' />
      <path d='M17.82 18.5h.34a3 3 0 0 0 2.9-2.87v-.26' stroke='currentColor' />
      <path d='M16.2 22.26h.34a3 3 0 0 0 2.9-2.86v-.26' stroke='currentColor' />
      <path d='M6.22 22.26H5.9A3 3 0 0 1 3 19.4v-.26' stroke='currentColor' />
      <path d='M3.02 8.19v2.42' stroke='currentColor' />
      <path d='M3.02 13.71v2.43' stroke='currentColor' />
      <path d='M21 8.57V12' stroke='currentColor' />
      <path d='M10.26 1.81h3.48' stroke='currentColor' />
      <path d='M9.74 22.24h3.47' stroke='currentColor' />
      <path d='M12 18.5h2.42' stroke='currentColor' />
      <path d='M6.02 18.5h2.42' stroke='currentColor' />
    </svg>
  )
}
