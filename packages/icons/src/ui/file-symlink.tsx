import type { Icon } from './types'

export const IconFileSymlink: Icon = ({
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
      data-slot='icon-ui-file-symlink'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.8 22.28c-3.78 0-5.66 0-6.83-1.18-1.18-1.17-1.18-3.05-1.18-6.82V9.74c0-3.73 0-5.6 1.16-6.77s3.03-1.19 6.76-1.23l1.71-.02v6.82h6.79v8.29c0 1.35 0 2.02-.16 2.57a4 4 0 0 1-2.72 2.72c-.55.16-1.22.16-2.57.16z'
        fill='currentColor'
      />
      <path
        d='M9.26 15.98h2.17a3.15 3.15 0 1 1 0 6.3H9.18c-1.29 0-1.94 0-2.47-.15a4 4 0 0 1-2.77-2.77c-.15-.53-.15-1.18-.15-2.47v-7.7c0-3.16 0-4.74.85-5.82a4 4 0 0 1 .7-.7c1.08-.85 2.66-.85 5.82-.85 1.37 0 2.06 0 2.69.22l.46.19c.6.3 1.08.78 2.05 1.75l.85.84.58.56c1.2 1.17 1.79 1.75 2.1 2.5.32.74.32 1.57.32 3.24v8.68a2.5 2.5 0 0 1-2.48 2.48'
        stroke='currentColor'
      />
      <path
        d='M13.22 2.34v2.47c0 1.88 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.47'
        stroke='currentColor'
      />
      <path
        d='m10.8 18.43-.36-.36c-1-1-1.5-1.5-1.5-2.12s.5-1.13 1.5-2.13l.36-.36'
        stroke='currentColor'
      />
    </svg>
  )
}
