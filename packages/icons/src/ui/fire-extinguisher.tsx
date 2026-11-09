import type { Icon } from './types'

export const IconFireExtinguisher: Icon = ({
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
      data-slot='icon-ui-fire-extinguisher'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M8.58 13.15h8.02v8.46H8.58z' fill='currentColor' />
      <path opacity='.2' d='M10.83 2.08h3.52v3.7h-3.52z' fill='currentColor' />
      <path
        d='M12.6 22.26c1.22 0 1.84 0 2.33-.17a3 3 0 0 0 1.8-1.81c.18-.5.18-1.1.18-2.34v-7.37c0-1.23 0-1.85-.18-2.34a3 3 0 0 0-1.8-1.8c-.5-.18-1.1-.18-2.34-.18v0c-1.23 0-1.84 0-2.33.18a3 3 0 0 0-1.81 1.8c-.18.5-.18 1.1-.18 2.34v7.37c0 1.23 0 1.85.18 2.34a3 3 0 0 0 1.8 1.8c.5.18 1.11.18 2.34.18'
        stroke='currentColor'
      />
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
