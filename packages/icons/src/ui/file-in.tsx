import type { Icon } from './types'

export const IconFileIn: Icon = ({
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
      data-slot='icon-ui-file-in'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.72 22.24c-3.78 0-5.66 0-6.83-1.17S3.72 18 3.72 14.24v-4.5c0-3.74 0-5.6 1.15-6.77 1.16-1.17 3.03-1.2 6.76-1.23l1.7-.02v6.8h6.77v5.72c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17z'
        fill='currentColor'
      />
      <path
        d='M20.1 12.66V11.1c0-1.66 0-2.5-.31-3.24-.32-.74-.91-1.32-2.1-2.49h0l-.58-.56-.84-.84c-.97-.96-1.46-1.45-2.05-1.74l-.47-.2c-.63-.2-1.31-.2-2.68-.2-3.15 0-4.72 0-5.8.83a4 4 0 0 0-.72.72c-.83 1.08-.83 2.65-.83 5.8v5.06c0 3.77 0 5.66 1.17 6.83s3.05 1.17 6.83 1.17h.2'
        stroke='currentColor'
      />
      <path d='M13.13 2.34v2.45c0 1.9 0 2.84.58 3.42s1.53.59 3.42.59h2.46' stroke='currentColor' />
      <path d='M18.3 16.2v6.2' stroke='currentColor' />
      <path
        d='m21.37 20.27-.94.94c-1 1-1.5 1.5-2.13 1.5s-1.12-.5-2.12-1.5l-.95-.94'
        stroke='currentColor'
      />
    </svg>
  )
}
