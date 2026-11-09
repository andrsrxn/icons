import type { Icon } from './types'

export const IconFloorPlan: Icon = ({
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
      data-slot='icon-ui-floor-plan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.38 21.38c3.77 0 5.66 0 6.83-1.17s1.17-3.05 1.17-6.83v-2.76c0-3.78 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.77c-3.77 0-5.66 0-6.83 1.17s-1.17 3.05-1.17 6.83v2.76c0 3.78 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17z'
        fill='currentColor'
      />
      <path
        d='M9.35 21.38c-2.56 0-3.84 0-4.8-.56a4 4 0 0 1-1.37-1.38c-.57-.95-.57-2.23-.57-4.8v-4.02c0-3.78 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h2.77c3.77 0 5.66 0 6.83 1.17s1.17 3.05 1.17 6.83v4.05c0 2.54 0 3.8-.56 4.75a4 4 0 0 1-1.4 1.4c-.95.56-2.22.56-4.76.56'
        stroke='currentColor'
      />
      <path d='M21.38 10.67h-7.26' stroke='currentColor' />
      <path d='M9.19 9.5V2.62' stroke='currentColor' />
      <path d='M11.18 15.54H2.6' stroke='currentColor' />
    </svg>
  )
}
