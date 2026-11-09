import type { Icon } from './types'

export const IconAlignBoxLeftVertically: Icon = ({
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
      data-slot='icon-ui-align-box-left-vertically'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.76 10.75c0-3.77 0-5.65 1.17-6.82 1.17-1.18 3.06-1.18 6.83-1.18h2.47c3.77 0 5.66 0 6.83 1.18 1.17 1.17 1.17 3.05 1.17 6.82v2.49c0 3.77 0 5.65-1.17 6.82-1.17 1.18-3.06 1.18-6.83 1.18h-2.47c-3.77 0-5.66 0-6.83-1.18-1.17-1.17-1.17-3.05-1.17-6.82z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M10.61 2.62h2.77c3.77 0 5.66 0 6.83 1.17s1.17 3.05 1.17 6.83v2.76c0 3.78 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.77c-3.77 0-5.66 0-6.83-1.17s-1.17-3.05-1.17-6.83v-2.76c0-3.78 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17'
        stroke='currentColor'
      />
      <path d='M6.45 17.44h5.19' stroke='currentColor' />
      <path d='M6.45 6.56h5.19' stroke='currentColor' />
      <path d='M6.45 12h8.6' stroke='currentColor' />
    </svg>
  )
}
