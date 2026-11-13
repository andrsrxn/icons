import type { Icon } from './types'

export const IconKeyboardRight: Icon = ({
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
      data-slot='icon-ui-keyboard-right'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.77 19.13c-2.83 0-4.24 0-5.12-.87-.88-.88-.88-2.3-.88-5.13v-2.26c0-2.83 0-4.25.88-5.13s2.3-.87 5.12-.87h3.46c2.83 0 4.24 0 5.12.87.88.88.88 2.3.88 5.13v2.26c0 2.83 0 4.25-.88 5.13s-2.3.87-5.12.87z'
        fill='currentColor'
      />
      <path
        d='M17.23 12.13v-.26c0-3.3 0-4.95-1.03-5.98-1.02-1.02-2.67-1.02-5.97-1.02H8.77c-3.3 0-4.95 0-5.97 1.02-1.03 1.03-1.03 2.68-1.03 5.98v.26c0 3.3 0 4.95 1.03 5.98 1.02 1.02 2.67 1.02 5.97 1.02h1.46c3.3 0 4.95 0 5.97-1.02 1.03-1.03 1.03-2.68 1.03-5.98'
        stroke='currentColor'
      />
      <path
        d='M13.09 12.4a.4.4 0 1 0 .8 0 .4.4 0 0 0-.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.09 8.32a.4.4 0 1 0 .8 0 .4.4 0 0 0-.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.1 12.4a.4.4 0 1 0 .8 0 .4.4 0 0 0-.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.1 8.32a.4.4 0 1 0 .8 0 .4.4 0 0 0-.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M5.11 12.4a.4.4 0 1 0 .8 0 .4.4 0 0 0-.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M5.11 8.32a.4.4 0 1 0 .8 0 .4.4 0 0 0-.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M6.07 16h6.86' stroke='currentColor' />
      <path
        d='m20.54 14.81.84-1.1c.68-.87 1.02-1.31 1.02-1.82s-.34-.95-1.02-1.83l-.84-1.1'
        stroke='currentColor'
      />
    </svg>
  )
}
