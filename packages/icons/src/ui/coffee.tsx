import type { Icon } from './types'

export const IconCoffee: Icon = ({
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
      data-slot='icon-ui-coffee'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.67 11.2c0-.81 0-1.22.12-1.54A2 2 0 0 1 4 8.44c.33-.11.73-.11 1.54-.11h9.53a5 5 0 0 1 1.54.11 2 2 0 0 1 1.21 1.22 5 5 0 0 1 .12 1.54v2.4c0 .6 0 .88-.02 1.13a7 7 0 0 1-6.49 6.49c-.24.02-.54.02-1.12.02-.6 0-.88 0-1.13-.02a7 7 0 0 1-6.49-6.49c-.02-.25-.02-.54-.02-1.13z'
        fill='currentColor'
      />
      <path
        d='M2.67 11.2c0-.81 0-1.22.12-1.54A2 2 0 0 1 4 8.44c.33-.11.73-.11 1.54-.11h9.53a5 5 0 0 1 1.54.11 2 2 0 0 1 1.21 1.22 5 5 0 0 1 .12 1.54v2.4c0 .6 0 .88-.02 1.13a7 7 0 0 1-6.49 6.49c-.24.02-.54.02-1.12.02-.6 0-.88 0-1.13-.02a7 7 0 0 1-6.49-6.49c-.02-.25-.02-.54-.02-1.13z'
        stroke='currentColor'
      />
      <path
        d='M17.94 16.24h1.52a3 3 0 0 0 2.81-2.82v-.8a3 3 0 0 0-2.82-2.81h-1.51'
        stroke='currentColor'
      />
      <path d='M5.66 2v2.9' stroke='currentColor' />
      <path d='M10.3 2v2.9' stroke='currentColor' />
      <path d='M14.95 2v2.9' stroke='currentColor' />
      <path d='M2.67 21.24h15.27' stroke='currentColor' />
    </svg>
  )
}
