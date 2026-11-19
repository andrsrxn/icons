import type { Icon } from './types'

export const IconDroneLight: Icon = ({
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
      data-slot='icon-ui-drone-light'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13 10.43a2.48 2.48 0 1 0 0-4.96h-2a2.48 2.48 0 0 0 0 4.96z'
        fill='currentColor'
      />
      <path
        d='M8.51 7.95a2.5 2.5 0 0 1 2.48-2.48h2.02a2.47 2.47 0 0 1 2.47 2.48v0c0 1.37-1.1 2.48-2.47 2.48h-2.02a2.5 2.5 0 0 1-2.48-2.48'
        stroke='currentColor'
      />
      <path d='M4.53 2.21v1.52c0 1.95 0 2.92.57 3.53s1.47.6 3.29.6h.04' stroke='currentColor' />
      <path
        d='M19.47 2.21v1.54c0 1.93 0 2.9-.56 3.5l-.02.03c-.56.59-1.46.59-3.26.59'
        stroke='currentColor'
      />
      <path d='M10.94 10.42c-1.02 0-2.06.38-2.62.93a3 3 0 0 0-.97 1.85' stroke='currentColor' />
      <path d='M13.07 10.42c1 0 2.05.38 2.6.93.59.57.84 1.04.98 1.85' stroke='currentColor' />
      <path d='M1.64 3.39H7.4' stroke='currentColor' />
      <path d='m7.33 21.63 1.7-6.08' stroke='currentColor' />
      <path d='m16.67 21.63-1.7-6.08' stroke='currentColor' />
      <path d='M12 20.95v-4.26' stroke='currentColor' />
      <path d='M16.57 3.39h5.79' stroke='currentColor' />
    </svg>
  )
}
