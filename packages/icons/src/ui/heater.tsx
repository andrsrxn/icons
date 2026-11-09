import type { Icon } from './types'

export const IconHeater: Icon = ({
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
      data-slot='icon-ui-heater'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.74 14.99c0-2.19 0-3.28.55-4.06a3 3 0 0 1 .73-.73c.78-.55 1.87-.55 4.06-.55h9.84c2.19 0 3.28 0 4.06.55a3 3 0 0 1 .73.73c.55.78.55 1.87.55 4.06s0 3.28-.55 4.05a3 3 0 0 1-.73.74c-.78.54-1.87.54-4.06.54H7.08c-2.19 0-3.28 0-4.06-.54a3 3 0 0 1-.73-.74c-.55-.77-.55-1.87-.55-4.05'
        fill='currentColor'
      />
      <path
        d='M7.08 20.32h9.84c2.19 0 3.28 0 4.06-.54a3 3 0 0 0 .73-.74c.55-.77.55-1.87.55-4.05v0c0-2.19 0-3.28-.55-4.06a3 3 0 0 0-.73-.73c-.78-.55-1.87-.55-4.06-.55H7.08c-2.19 0-3.28 0-4.06.55a3 3 0 0 0-.73.73c-.55.78-.55 1.87-.55 4.06v0c0 2.18 0 3.28.55 4.05a3 3 0 0 0 .73.74c.78.54 1.87.54 4.06.54'
        stroke='currentColor'
      />
      <path d='M5.79 20.32v1.83' stroke='currentColor' />
      <path d='M18.21 20.32v1.83' stroke='currentColor' />
      <path d='M7.03 12.7v4.48' stroke='currentColor' />
      <path d='M16.97 12.7v4.48' stroke='currentColor' />
      <path d='M12 12.7v4.48' stroke='currentColor' />
      <path
        d='m14.18 1.51.7.6c.6.51.55 1.45-.1 1.89-.7.46-.7 1.49-.01 1.96l.63.42'
        stroke='currentColor'
      />
      <path
        d='m8.75 1.51.68.6A1.2 1.2 0 0 1 9.32 4a1.2 1.2 0 0 0 0 1.96l.6.42'
        stroke='currentColor'
      />
    </svg>
  )
}
