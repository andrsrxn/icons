import type { Icon } from './types'

export const IconFileMove: Icon = ({
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
      data-slot='icon-ui-file-move'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.8 22.23c-3.78 0-5.66 0-6.83-1.17-1.18-1.17-1.18-3.06-1.18-6.83V9.69c0-3.73 0-5.6 1.16-6.77s3.03-1.19 6.76-1.23l1.71-.01v6.81h6.79v5.74c0 3.77 0 5.66-1.18 6.83-1.17 1.17-3.05 1.17-6.82 1.17z'
        fill='currentColor'
      />
      <path
        d='M3.8 14.23V9.14c0-3.16 0-4.74.84-5.82a4 4 0 0 1 .7-.7c1.08-.84 2.66-.84 5.82-.84 1.37 0 2.06 0 2.69.21l.46.2c.6.28 1.08.77 2.05 1.74l.85.84.58.57c1.2 1.16 1.79 1.74 2.1 2.49.32.74.32 1.57.32 3.24v3.16c0 3.77 0 5.66-1.18 6.83-1.17 1.17-3.05 1.17-6.82 1.17h-.42c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.06-1.18-6.83'
        stroke='currentColor'
      />
      <path
        d='M13.22 2.3v2.46c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.47'
        stroke='currentColor'
      />
      <path
        d='m13.46 18.49.32-.32c1.33-1.34 2-2 2-2.83s-.66-1.5-2-2.83l-.32-.33'
        stroke='currentColor'
      />
      <path d='M7.85 15.33h7.8' stroke='currentColor' />
    </svg>
  )
}
