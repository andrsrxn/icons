import type { Icon } from './types'

export const IconReloadCheck: Icon = ({
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
      data-slot='icon-ui-reload-check'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M21.25 5.1v1.28c0 1.2 0 1.8-.37 2.17-.37.38-.97.38-2.17.38h-1.29'
        stroke='currentColor'
      />
      <path
        d='M19.02 17.8a9.17 9.17 0 1 1-7.1-14.97c5.06 0 7.4 4.03 8.45 5.46'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='12' cy='12' r='9.25' fill='currentColor' />
      <path
        d='m8.22 13.15.6.72c.71.89 1.07 1.33 1.55 1.32.47 0 .83-.44 1.55-1.32l2.98-3.68'
        stroke='currentColor'
      />
    </svg>
  )
}
