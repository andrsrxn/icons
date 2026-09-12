import type { Icon } from './types'

export const IconFireExtinguisher: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-fire-extinguisher'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M8.58 13.15h8.02v8.46H8.58z' />
      <path opacity='.2' fill='currentColor' d='M10.83 2.08h3.52v3.71h-3.52z' />
      <rect x='8.27' y='6.25' width='8.64' height='16.01' rx='2' stroke='currentColor' />
      <path d='M16.91 13.15H8.58' stroke='currentColor' />
      <path
        d='M14.85 6.25V3.74c0-.95 0-1.42-.3-1.71-.29-.3-.76-.3-1.7-.3h-.51c-.95 0-1.42 0-1.71.3s-.3.76-.3 1.7v2.52'
        stroke='currentColor'
      />
      <path
        d='M10.34 3.69s-1.47-.14-2.99 0c-1.82.17-2.51 2.07-2.51 3.47s0 3.07-.83 4.3'
        stroke='currentColor'
      />
      <path d='M19 3.69h-4.15' stroke='currentColor' />
    </svg>
  )
}
