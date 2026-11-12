import type { Icon } from './types'

export const IconDroplets: Icon = ({
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
      data-slot='icon-ui-droplets'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.76 22.05c3.18 0 5.76-2.42 5.76-5.42 0-5.39-5.76-9.39-5.76-9.39S2 11.18 2 16.64c0 2.99 2.58 5.41 5.76 5.41'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M18.3 11.6c2.17 0 3.93-1.66 3.93-3.7 0-3.68-3.93-6.41-3.93-6.41s-3.94 2.68-3.94 6.4c0 2.05 1.76 3.71 3.94 3.71'
        fill='currentColor'
      />
      <path
        d='M13.52 16.63c0 3-2.58 5.42-5.76 5.42S2 19.63 2 16.63c0-3.34 2.07-6.05 3.73-7.68.8-.8 1.21-1.2 2.03-1.2s1.23.4 2.03 1.2c1.66 1.64 3.73 4.36 3.73 7.68'
        stroke='currentColor'
      />
      <path
        d='M22.23 7.9c0 2.04-1.76 3.7-3.93 3.7-2.18 0-3.94-1.66-3.94-3.7 0-2.2 1.31-4 2.42-5.12.6-.6.89-.9 1.52-.9s.92.3 1.51.9c1.11 1.13 2.42 2.93 2.42 5.12'
        stroke='currentColor'
      />
      <path
        d='M10.56 16.27a3.3 3.3 0 0 1-.81 1.77c-.54.65-1.15.95-1.8 1.15'
        stroke='currentColor'
      />
      <path d='M19.54 7.35a1.8 1.8 0 0 1-1.3 1.46' stroke='currentColor' />
    </svg>
  )
}
