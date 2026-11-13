import type { Icon } from './types'

export const IconMarginTop: Icon = ({
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
      data-slot='icon-ui-margin-top'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.76 13.24c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h2.48c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-4.1c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3H4.76c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M13.24 2.76h-2.48c-3.77 0-5.66 0-6.83 1.17S2.76 7 2.76 10.76v2.48c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h2.48c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-2.48c0-3.77 0-5.66-1.17-6.83S17 2.76 13.24 2.76'
        stroke='currentColor'
      />
      <path d='M2.95 7.22h18' stroke='currentColor' />
    </svg>
  )
}
