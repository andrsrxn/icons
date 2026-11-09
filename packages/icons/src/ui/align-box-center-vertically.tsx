import type { Icon } from './types'

export const IconAlignBoxCenterVertically: Icon = ({
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
      data-slot='icon-ui-align-box-center-vertically'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.24 2.76c3.77 0 5.66 0 6.83 1.17 1.17 1.18 1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.65-1.17 6.83s-3.06 1.17-6.83 1.17h-2.48c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83v-2.48c0-3.77 0-5.65 1.17-6.83S7 2.76 10.76 2.76z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M21.38 10.62v2.76c0 3.78 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.77c-3.77 0-5.66 0-6.83-1.17s-1.17-3.05-1.17-6.83v-2.76c0-3.78 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h2.77c3.77 0 5.66 0 6.83 1.17s1.17 3.05 1.17 6.83'
        stroke='currentColor'
      />
      <path d='M9.4 17.49h5.19' stroke='currentColor' />
      <path d='M9.4 6.51h5.19' stroke='currentColor' />
      <path d='M7.7 12h8.6' stroke='currentColor' />
    </svg>
  )
}
