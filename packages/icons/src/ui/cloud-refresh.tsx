import type { Icon } from './types'

export const IconCloudRefresh: Icon = ({
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
      data-slot='icon-ui-cloud-refresh'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m1.48 12.97 3.85 3.79h13.63l2.95-2.14v-4.28L18.61 8l-1.73 1.2-.92-3.5L12 3.44 8.7 4.85 7.03 8 3.2 9.2z'
        fill='currentColor'
      />
      <path
        d='M6.83 7.57a5.09 5.09 0 0 1 9.34-1.17c.52.9.7 1.83.72 2.63 0 .47-.06.7-.06.7'
        stroke='currentColor'
      />
      <path
        d='M4.87 16.36c-.44 0-1.22-.32-2-1.1a4.27 4.27 0 0 1 3.06-7.28c1.4 0 2.64.67 3.43 1.7'
        stroke='currentColor'
      />
      <path
        d='M16.92 8.44a3.6 3.6 0 0 1 3.37.12 4.3 4.3 0 0 1 1.57 5.84c-.7 1.21-1.37 2-2.36 2.12'
        stroke='currentColor'
      />
      <path d='M15.33 15.3c-.86-1.21-1.89-2.04-3.35-2.04q-2.18-.01-3.2 1.9' stroke='currentColor' />
      <path d='M8.97 18.35c.85 1.2 1.87 2.05 3.33 2.05q2.18 0 3.2-1.9' stroke='currentColor' />
      <path d='M15.7 13.06v.6c0 .94 0 1.41-.3 1.7s-.76.3-1.7.3h-.6' stroke='currentColor' />
      <path
        d='M8.6 20.46 8.58 20c0-.94 0-1.42.3-1.7.28-.3.76-.3 1.7-.3h.47'
        stroke='currentColor'
      />
    </svg>
  )
}
