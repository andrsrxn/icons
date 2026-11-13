import type { Icon } from './types'

export const IconRestroom: Icon = ({
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
      data-slot='icon-ui-restroom'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='5.34' cy='6.58' r='2.11' fill='currentColor' />
      <circle opacity='.2' cx='18.85' cy='6.58' r='2.11' fill='currentColor' />
      <path
        d='M5.34 10.76v3.73c0 .47 0 .7-.05.93s-.16.44-.38.86l-1.76 3.5m5.92-6.14-3.73-2.88-3.5 2.88'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M15.65 15.78c.51-1.8 1.64-5.02 3.2-5.02s2.7 3.2 3.22 5.01c.16.54.23.8.08 1s-.43.2-1 .2h-4.57c-.57 0-.85 0-1-.2-.15-.19-.08-.46.07-1'
        fill='currentColor'
      />
      <path
        d='M18.85 10.76c-1.94 0-2.91 3.3-3.3 5.1-.1.5-.16.75 0 .93.14.19.4.19.94.19h4.74c.54 0 .8 0 .96-.19s.1-.44-.02-.94c-.4-1.8-1.4-5.1-3.32-5.1'
        stroke='currentColor'
      />
      <path d='m17.76 17.08-1.1 2.7' stroke='currentColor' />
      <path d='m5.34 15.44 2.19 4.35' stroke='currentColor' />
      <path d='m19.95 17.08 1.09 2.7' stroke='currentColor' />
      <circle cx='5.34' cy='6.58' r='2.11' stroke='currentColor' />
      <circle cx='18.85' cy='6.58' r='2.11' stroke='currentColor' />
      <path d='M12 3.17v17.66' stroke='currentColor' />
    </svg>
  )
}
