import type { Icon } from './types'

export const IconReload: Icon = ({
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
      data-slot='icon-ui-reload'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M21.25 3.03v1.98c0 1.85 0 2.77-.57 3.34-.57.58-1.5.58-3.34.58h-1.98'
        stroke='currentColor'
      />
      <path
        d='M19.02 17.8a9.17 9.17 0 1 1-7.1-14.97c5.06 0 7.4 4.03 8.45 5.46'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='12' cy='12' r='9.25' fill='currentColor' />
    </svg>
  )
}
