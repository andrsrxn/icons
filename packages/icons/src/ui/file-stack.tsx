import type { Icon } from './types'

export const IconFileStack: Icon = ({
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
      data-slot='icon-ui-file-stack'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.83 12.66V9.67c0-3.73 0-5.6 1.16-6.77C6.14 1.73 8 1.71 11.75 1.67l1.66-.01v6.78h6.75v4.22z'
        fill='currentColor'
      />
      <path
        d='M3.83 12.48v-3.4c0-3.12 0-4.68.83-5.76a4 4 0 0 1 .74-.74c1.07-.82 2.64-.82 5.76-.82 1.36 0 2.04 0 2.66.2l.49.2c.59.3 1.07.78 2.03 1.74l.84.84.56.55c1.2 1.16 1.8 1.74 2.1 2.49.32.74.32 1.57.32 3.24v1.46'
        stroke='currentColor'
      />
      <path
        d='M13.21 2.27V4.7h0c0 1.9 0 2.84.58 3.42.59.59 1.53.59 3.42.59h2.44'
        stroke='currentColor'
      />
      <path d='M20.16 15.4H3.84' stroke='currentColor' />
      <path d='M20.16 18.84H3.84' stroke='currentColor' />
      <path d='M20.16 22.28H3.84' stroke='currentColor' />
    </svg>
  )
}
