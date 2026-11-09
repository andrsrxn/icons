import type { Icon } from './types'

export const IconFolderCode: Icon = ({
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
      data-slot='icon-ui-folder-code'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22 16.77a3.4 3.4 0 0 1-3.41 3.4H9.67c-3.77 0-5.66 0-6.83-1.16-1.17-1.18-1.17-3.06-1.17-6.83V7.42A3.7 3.7 0 0 1 5.4 3.71h.8c.99 0 1.48 0 1.95.11a4 4 0 0 1 .84.31c.43.22.81.54 1.56 1.18.76.64 1.13.96 1.56 1.18a4 4 0 0 0 .85.3c.47.12.96.12 1.95.12h.12c2.91 0 4.37 0 5.4.72a4 4 0 0 1 1.06 1.08c.69 1.05.65 2.5.58 5.42L22 16.62z'
        fill='currentColor'
      />
      <path
        d='M11 20.18H9.67c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83V6.4a2.57 2.57 0 0 1 2.57-2.57h2.2c.66 0 .98 0 1.3.05a4 4 0 0 1 1.6.62c.26.18.5.4.98.85s.72.67.98.84a4 4 0 0 0 1.6.63c.3.05.64.05 1.3.05h4.13a4 4 0 0 1 3.91 4.1'
        stroke='currentColor'
      />
      <path
        d='M20.2 14.85c1.37 1.15 2.05 1.72 2.18 2.45a2 2 0 0 1 0 .66c-.12.73-.81 1.3-2.18 2.45'
        stroke='currentColor'
      />
      <path
        d='M16.8 14.85c-1.37 1.15-2.06 1.72-2.18 2.45a2 2 0 0 0 0 .66c.12.73.8 1.3 2.18 2.45'
        stroke='currentColor'
      />
    </svg>
  )
}
