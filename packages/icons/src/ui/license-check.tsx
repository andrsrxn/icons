import type { Icon } from './types'

export const IconLicenseCheck: Icon = ({
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
      data-slot='icon-ui-license-check'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.8 22.28c-3.78 0-5.66 0-6.83-1.18-1.18-1.17-1.18-3.05-1.18-6.82V9.74c0-3.73 0-5.6 1.16-6.77s3.03-1.19 6.76-1.23l1.71-.02c2.7.23 4.05.35 5 1.11q.31.25.56.55c.78.94.92 2.28 1.2 4.97l.03.2v9.72a4 4 0 0 1-1.08 2.72l-.02.02-.03.02a4 4 0 0 1-2.88 1.25z'
        fill='currentColor'
      />
      <path
        d='M20.2 13.33v-3.5c0-3.78 0-5.66-1.17-6.83-1.17-1.18-3.05-1.18-6.82-1.18h-.42c-3.77 0-5.65 0-6.82 1.18-1.18 1.17-1.18 3.05-1.18 6.82v4.46c0 3.77 0 5.65 1.18 6.82 1.17 1.18 3.06 1.18 6.85 1.18'
        stroke='currentColor'
      />
      <path d='M12.98 12.05H7.66' stroke='currentColor' />
      <path d='M12.98 16.6H7.66' stroke='currentColor' />
      <path d='M16.34 7.56H7.66' stroke='currentColor' />
      <path
        d='m15.67 20.22.51.65c.73.9 1.09 1.36 1.57 1.36.49 0 .85-.46 1.57-1.37l2.84-3.6'
        stroke='currentColor'
      />
    </svg>
  )
}
