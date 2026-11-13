import type { Icon } from './types'

export const IconFileInfo: Icon = ({
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
      data-slot='icon-ui-file-info'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.78 22.26c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.05-1.18-6.83v-4.5c0-3.74 0-5.61 1.16-6.78S7.97 1.8 11.7 1.75l1.7-.01v6.8h6.78v5.72c0 3.78 0 5.66-1.17 6.83-1.18 1.17-3.06 1.17-6.83 1.17z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M3.78 14.26V9.2c0-3.15 0-4.72.84-5.8a4 4 0 0 1 .71-.72c1.09-.83 2.66-.83 5.81-.83 1.37 0 2.05 0 2.68.21l.47.2c.6.29 1.08.77 2.05 1.74l.84.84.58.56c1.2 1.16 1.79 1.74 2.1 2.49.32.74.32 1.58.32 3.24v3.14c0 3.78 0 5.66-1.17 6.83-1.18 1.17-3.06 1.17-6.83 1.17h-.4c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.05-1.18-6.83'
        stroke='currentColor'
      />
      <path
        d='M13.2 2.35v2.46c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.46'
        stroke='currentColor'
      />
      <path d='M10.93 14.26H11c.47 0 .7 0 .85.15s.15.38.15.85v4.19' stroke='currentColor' />
      <path d='M10.54 19.45h2.92' stroke='currentColor' />
      <path
        d='M12.47 11.27a.47.47 0 1 1-.94 0 .47.47 0 0 1 .94 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
