import type { Icon } from './types'

export const IconMarginHorizontal: Icon = ({
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
      data-slot='icon-ui-margin-horizontal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.78 21.24V2.76H7.14v18.48z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M2.76 10.76v2.48c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h2.48c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-2.48c0-3.77 0-5.66-1.17-6.83S17 2.76 13.24 2.76h-2.48c-3.77 0-5.66 0-6.83 1.17S2.76 7 2.76 10.76'
        stroke='currentColor'
      />
      <path d='M7.22 21.05v-18' stroke='currentColor' />
      <path d='M16.78 21.05v-18' stroke='currentColor' />
    </svg>
  )
}
