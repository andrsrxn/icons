import type { Icon } from './types'

export const IconDownloadCircle: Icon = ({
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
      data-slot='icon-ui-download-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0m4.72 1.6h11v1.9l-1.54 1-8.41-.13-1.04-.86z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M12 6.18v6.62' stroke='currentColor' />
      <path
        d='m8.44 10.65.73.73c1.33 1.33 2 2 2.83 2s1.5-.66 2.83-2l.73-.73'
        stroke='currentColor'
      />
      <path
        d='M6.5 13.85c0 .95 0 1.42.21 1.77q.2.33.54.54c.35.2.83.2 1.77.2h5.96c.94 0 1.42 0 1.77-.2q.33-.2.54-.54c.2-.35.2-.82.2-1.77'
        stroke='currentColor'
      />
    </svg>
  )
}
