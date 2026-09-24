import type { Icon } from './types'

export const IconListTodo: Icon = ({
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
      data-slot='icon-ui-list-todo'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.38 6h-9.81' stroke='currentColor' />
      <path d='M21.38 12h-9.81' stroke='currentColor' />
      <path d='M21.38 18h-9.81' stroke='currentColor' />
      <path
        d='m2.66 7.21.88 1.08c.36.44.54.66.78.66s.42-.22.77-.67l2.72-3.35'
        stroke='currentColor'
      />
      <rect
        opacity='.2'
        width='5.15'
        height='5.15'
        rx='1.5'
        transform='matrix(0 -1 -1 0 7.81 18.04)'
        fill='currentColor'
      />
      <rect
        width='5.15'
        height='5.15'
        rx='1.5'
        transform='matrix(0 -1 -1 0 7.81 18.04)'
        stroke='currentColor'
      />
    </svg>
  )
}
