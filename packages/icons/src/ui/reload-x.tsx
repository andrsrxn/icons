import type { Icon } from './types'

export const IconReloadX: Icon = ({
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
      data-slot='icon-ui-reload-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M21.25 4.68v1.43c0 1.33 0 2-.4 2.4-.42.42-1.09.42-2.41.42H17'
        stroke='currentColor'
      />
      <path
        d='M19.02 17.8a9.17 9.17 0 1 1-7.1-14.97c5.06 0 7.4 4.03 8.45 5.46'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='12' cy='12' r='9.25' fill='currentColor' />
      <path d='m14.39 9.18-5.66 5.66' stroke='currentColor' />
      <path d='m8.73 9.16 5.66 5.66' stroke='currentColor' />
    </svg>
  )
}
