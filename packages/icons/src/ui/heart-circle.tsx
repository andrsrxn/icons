import type { Icon } from './types'

export const IconHeartCircle: Icon = ({
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
      data-slot='icon-ui-heart-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.76 12a10.24 10.24 0 1 0 20.48 0 10.24 10.24 0 0 0-20.48 0m15.14 2.34L12 17.7l-4.7-3.37-1.42-3.74 1.85-3.04 4.27 1 3.86-1.21 2.2 3.25z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.24' stroke='currentColor' />
      <path
        d='M13.12 8.44c.5-.34 1.14-.6 1.88-.6 1.91 0 3.35 2.17 2.73 4.48-.44 1.64-2.4 3.06-4.04 4.33h0c-.9.71-1.34 1.06-1.69 1.06s-.8-.35-1.7-1.06c-1.62-1.27-3.6-2.7-4.03-4.33-.62-2.3.82-4.49 2.73-4.49.74 0 1.38.27 1.88.6.65.44.97.66 1.12.66s.47-.22 1.12-.65'
        stroke='currentColor'
      />
    </svg>
  )
}
