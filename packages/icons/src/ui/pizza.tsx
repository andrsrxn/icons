import type { Icon } from './types'

export const IconPizza: Icon = ({
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
      data-slot='icon-ui-pizza'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.84 14.57 13.34 18l-2.17-1.88-3.47 2.2.53 2.6-2 .86c-1.31.58-1.97.87-2.62.72s-1.1-.7-2.04-1.8l-.2-.25 3.87-7.92a2.7 2.7 0 0 0 3.22.23 2.7 2.7 0 0 0 .88-3.72c-.36-.58-.86-1.3-1.47-1.5L9.34 4.6c1.4.74 3.62 2.25 5.9 4.44 1.73 2.18 3.93 4.76 4.6 5.53'
        fill='currentColor'
      />
      <path
        d='m14.92 17.47 2.56-1.41c3.21-1.77 4.81-2.65 5.03-4.13.2-1.49-1.09-2.78-3.68-5.37L17.67 5.4c-2.59-2.6-3.89-3.9-5.37-3.68-1.49.21-2.37 1.82-4.13 5.04l-1.4 2.57c-4.03 7.34-6.04 11-4.45 12.6 1.6 1.59 5.26-.43 12.6-4.46'
        stroke='currentColor'
      />
      <path
        d='M9.53 4.58a33 33 0 0 1 3.95 2.91c2.77 2.33 6.37 6.78 6.37 6.78'
        stroke='currentColor'
      />
      <path d='M8.38 21A2.7 2.7 0 1 1 13 18.45' stroke='currentColor' />
      <path d='M7.93 7.76a2.7 2.7 0 1 1-2.58 4.6' stroke='currentColor' />
      <path
        d='M14.18 12.9a.48.48 0 1 1-.95 0 .48.48 0 0 1 .95 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
