import type { Icon } from './types'

export const IconDeviceTabletPhone: Icon = ({
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
      data-slot='icon-ui-device-tablet-phone'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M9.76 21.4c-3.77 0-5.66 0-6.83-1.18-1.17-1.17-1.17-3.06-1.17-6.83V10.1c0-3.28 0-4.92.9-6.03a4 4 0 0 1 .56-.56c1.11-.9 2.75-.9 6.03-.9h4.26a3.24 3.24 0 0 1 1.56 6.08l-1.05.57V21.4z'
        fill='currentColor'
      />
      <path
        d='M16.3 21.4H9.75c-3.77 0-5.66 0-6.83-1.18-1.17-1.17-1.17-3.06-1.17-6.83V10.1c0-3.28 0-4.92.9-6.03a4 4 0 0 1 .56-.56c1.11-.9 2.75-.9 6.03-.9h2.1c1.3 0 1.95 0 2.48.15a4 4 0 0 1 2.77 2.77c.15.53.15 1.18.15 2.48'
        stroke='currentColor'
      />
      <path
        d='M10.04 17.34a.79.79 0 1 1-1.57 0 .79.79 0 0 1 1.57 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M22.24 17.12V12.4c0-1.66 0-2.5-.38-3.1a2.5 2.5 0 0 0-.8-.8c-.6-.38-1.43-.38-3.1-.38v0c-1.65 0-2.48 0-3.09.38q-.49.31-.8.8c-.38.6-.38 1.44-.38 3.1v4.7c0 1.67 0 2.5.38 3.1q.31.5.8.8c.6.38 1.44.38 3.1.38v0c1.66 0 2.49 0 3.1-.38q.49-.3.8-.8c.37-.6.37-1.43.37-3.1'
        stroke='currentColor'
      />
      <path d='M19.15 11.07h-2.4' stroke='currentColor' />
    </svg>
  )
}
