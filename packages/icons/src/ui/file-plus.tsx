import type { Icon } from './types'

export const IconFilePlus: Icon = ({
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
      data-slot='icon-ui-file-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.8 22.28c-3.77 0-5.65 0-6.83-1.18-1.17-1.17-1.17-3.05-1.17-6.82V9.74c0-3.73 0-5.6 1.16-6.77s3.02-1.19 6.76-1.23l1.71-.02v6.82h6.79v5.74c0 3.77 0 5.65-1.18 6.82-1.17 1.18-3.05 1.18-6.82 1.18z'
        fill='currentColor'
      />
      <path
        d='M3.8 14.28V9.19c0-3.16 0-4.74.84-5.82a4 4 0 0 1 .7-.7c1.09-.85 2.67-.85 5.83-.85 1.37 0 2.06 0 2.69.22l.46.19c.6.3 1.08.78 2.05 1.75l.85.84.58.56c1.19 1.17 1.79 1.75 2.1 2.5.32.74.32 1.57.32 3.24v3.16c0 3.77 0 5.65-1.18 6.82-1.17 1.18-3.05 1.18-6.82 1.18h-.42c-3.77 0-5.65 0-6.83-1.18-1.17-1.17-1.17-3.05-1.17-6.82'
        stroke='currentColor'
      />
      <path
        d='M13.22 2.3v2.46c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.47'
        stroke='currentColor'
      />
      <path d='M12 11.77v7.05' stroke='currentColor' />
      <path d='M8.48 15.29h7.04' stroke='currentColor' />
    </svg>
  )
}
