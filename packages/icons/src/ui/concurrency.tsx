import type { Icon } from './types'

export const IconConcurrency: Icon = ({
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
      data-slot='icon-ui-concurrency'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle cx='12' cy='12' r='4.12' stroke='currentColor' />
      <circle cx='4.35' cy='4.35' r='1.59' stroke='currentColor' />
      <circle cx='19.64' cy='4.35' r='1.59' stroke='currentColor' />
      <circle cx='12' cy='3.1' r='1.58' stroke='currentColor' />
      <circle cx='12' cy='20.93' r='1.58' stroke='currentColor' />
      <circle cx='4.35' cy='19.65' r='1.59' stroke='currentColor' />
      <circle cx='19.64' cy='19.65' r='1.59' stroke='currentColor' />
      <circle opacity='.2' cx='12' cy='12' r='4.12' fill='currentColor' />
      <circle opacity='.2' cx='4.35' cy='4.35' r='1.59' fill='currentColor' />
      <circle opacity='.2' cx='19.64' cy='4.35' r='1.59' fill='currentColor' />
      <circle opacity='.2' cx='12' cy='3.1' r='1.58' fill='currentColor' />
      <circle opacity='.2' cx='12' cy='20.93' r='1.58' fill='currentColor' />
      <circle opacity='.2' cx='4.35' cy='19.65' r='1.59' fill='currentColor' />
      <circle opacity='.2' cx='19.64' cy='19.65' r='1.59' fill='currentColor' />
      <path
        d='M4.35 5.94v1c0 1.44 0 2.15.35 2.66a2 2 0 0 0 .53.52c.5.35 1.22.35 2.65.35'
        stroke='currentColor'
      />
      <path
        d='M19.64 5.94v1c0 1.44 0 2.15-.34 2.66a2 2 0 0 1-.53.52c-.5.35-1.22.35-2.65.35'
        stroke='currentColor'
      />
      <path d='M12 7.88v-3.2' stroke='currentColor' />
      <path d='M12 16.14v3.2' stroke='currentColor' />
      <path
        d='M4.35 18.06v-1c0-1.44 0-2.15.35-2.66a2 2 0 0 1 .53-.53c.5-.34 1.22-.34 2.65-.34'
        stroke='currentColor'
      />
      <path
        d='M19.64 18.06v-1c0-1.44 0-2.15-.34-2.66a2 2 0 0 0-.53-.53c-.5-.34-1.22-.34-2.65-.34'
        stroke='currentColor'
      />
    </svg>
  )
}
