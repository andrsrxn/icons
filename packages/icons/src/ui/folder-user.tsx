import type { Icon } from './types'

export const IconFolderUser: Icon = ({
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
      data-slot='icon-ui-folder-user'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m17.61 12.1-1.73 2.28.91 2.82-1.88 2.98H9.67c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83V7.42A3.7 3.7 0 0 1 5.4 3.71h.8c.99 0 1.48 0 1.95.11a4 4 0 0 1 .84.31c.43.22.81.54 1.56 1.18.76.64 1.13.96 1.56 1.18a4 4 0 0 0 .85.3c.47.12.96.12 1.95.12h.17c2.97 0 4.46 0 5.5.75a4 4 0 0 1 .92.92c.75 1.05.75 2.53.75 5.5v4.96L20 17.57l.9-2.83-.9-2.11z'
        fill='currentColor'
      />
      <path
        d='M11.05 20.18H9.67c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83V6.4a2.57 2.57 0 0 1 2.57-2.57h2.2c.66 0 .98 0 1.3.05a4 4 0 0 1 1.6.62c.26.18.5.4.98.85s.72.67.98.84a4 4 0 0 0 1.6.63c.3.05.64.05 1.3.05h5.03a3 3 0 0 1 3 3'
        stroke='currentColor'
      />
      <path d='M20.75 14.83a2.38 2.38 0 1 0-4.76 0 2.38 2.38 0 0 0 4.76 0' stroke='currentColor' />
      <path d='M15.03 20.55a3.34 3.34 0 0 1 6.68 0' stroke='currentColor' />
    </svg>
  )
}
