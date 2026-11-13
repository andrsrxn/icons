import type { Icon } from './types'

export const IconMarginRight: Icon = ({
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
      data-slot='icon-ui-margin-right'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M10.76 2.76c-3.77 0-5.66 0-6.83 1.17S2.76 7 2.76 10.76v2.48c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h4.1c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7V4.76c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M21.24 13.24v-2.48c0-3.77 0-5.66-1.17-6.83S17 2.76 13.24 2.76h-2.48c-3.77 0-5.66 0-6.83 1.17S2.76 7 2.76 10.76v2.48c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h2.48c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83'
        stroke='currentColor'
      />
      <path d='M16.78 2.95v18' stroke='currentColor' />
    </svg>
  )
}
