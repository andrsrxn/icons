import type { Icon } from './types'

export const IconGalaxy: Icon = ({
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
      data-slot='icon-ui-galaxy'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12.19' r='3.53' fill='currentColor' />
      <path d='M6.34 14.87s-1.7-1.99-1.89-5.27.9-5.38.9-5.38' stroke='currentColor' />
      <path d='M17.66 9.54s1.7 1.99 1.89 5.27-.9 5.38-.9 5.38' stroke='currentColor' />
      <path d='M13.1 18.36s-2.35 1.13-5.57.46-4.97-2.26-4.97-2.26' stroke='currentColor' />
      <path d='M10.9 6.05s2.35-1.13 5.57-.46 4.97 2.26 4.97 2.26' stroke='currentColor' />
      <circle cx='12' cy='12.19' r='3.53' stroke='currentColor' />
      <path
        d='M8.47 3.04a.38.38 0 1 1 0 .75.38.38 0 0 1 0-.75'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M1.93 10.99a.38.38 0 1 1 0 .75.38.38 0 0 1 0-.75'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M15.53 20.2a.38.38 0 1 1 0 .76.38.38 0 0 1 0-.75'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M22.07 10.99a.38.38 0 1 1 0 .75.38.38 0 0 1 0-.75'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
