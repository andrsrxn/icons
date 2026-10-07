import type { Icon } from './types'

export const IconReplay: Icon = ({
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
      data-slot='icon-ui-replay'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M8.48 12c0-2.7 0-4.06.78-4.66a2 2 0 0 1 .5-.29c.93-.35 2.08.36 4.39 1.77 2.14 1.31 3.2 1.97 3.34 2.9a2 2 0 0 1 0 .56c-.13.93-1.2 1.59-3.34 2.9-2.31 1.41-3.46 2.12-4.38 1.77a2 2 0 0 1-.51-.29c-.78-.6-.78-1.95-.78-4.66'
        fill='currentColor'
      />
      <path
        d='M8.48 12c0-2.7 0-4.06.78-4.66a2 2 0 0 1 .5-.29c.93-.35 2.08.36 4.39 1.77 2.14 1.31 3.2 1.97 3.34 2.9a2 2 0 0 1 0 .56c-.13.93-1.2 1.59-3.34 2.9-2.31 1.41-3.46 2.12-4.38 1.77a2 2 0 0 1-.51-.29c-.78-.6-.78-1.95-.78-4.66'
        stroke='currentColor'
      />
      <path d='M20.3 5.89a11 11 0 0 0-9.49-3.63 9.51 9.51 0 1 0 9.1 15.07' stroke='currentColor' />
      <path
        d='M17.14 6.97h1.1c1.42 0 2.13 0 2.57-.44s.44-1.14.44-2.56V2.86'
        stroke='currentColor'
      />
    </svg>
  )
}
