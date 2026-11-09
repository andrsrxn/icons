import type { Icon } from './types'

export const IconSaturation: Icon = ({
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
      data-slot='icon-ui-saturation'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.23 13.24c0 3.78 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17H7.6c-2.06 0-3.09 0-3.34-.61-.26-.62.47-1.35 1.92-2.8L17.82 6.18C19.27 4.73 20 4 20.62 4.25s.61 1.29.61 3.34z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M10.61 21.38h2.77c3.77 0 5.66 0 6.83-1.17s1.17-3.05 1.17-6.83v-2.76c0-3.78 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.77c-3.77 0-5.66 0-6.83 1.17s-1.17 3.05-1.17 6.83v2.76c0 3.78 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17'
        stroke='currentColor'
      />
      <path d='M10.71 8.08H5.5' stroke='currentColor' />
      <path d='M18.43 16.33H13.6' stroke='currentColor' />
      <path d='M8.1 5.47v5.21' stroke='currentColor' />
      <path d='M20.13 3.98 3.87 20.24' stroke='currentColor' />
    </svg>
  )
}
