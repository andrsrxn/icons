import type { Icon } from './types'

export const IconPencilCircle: Icon = ({
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
      data-slot='icon-ui-pencil-circle'
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
        d='M7.27 20.89A10.3 10.3 0 1 1 17.5 21v-8.35l-5-6.68-5.23 6.69z'
        fill='currentColor'
      />
      <path
        d='M7.42 20.88v-7.07c0-.6 0-.9.09-1.2.09-.28.26-.53.6-1.03l2.73-4.06c.75-1.12 1.12-1.68 1.66-1.68s.9.56 1.66 1.68l2.73 4.06c.34.5.5.75.6 1.04.08.28.08.59.08 1.2v7.06'
        stroke='currentColor'
      />
      <path d='M2.2 12a10.3 10.3 0 0 0 10.3 10.31A10.31 10.31 0 1 0 2.2 12' stroke='currentColor' />
      <path d='M7.64 12.89h9.7' stroke='currentColor' />
      <path d='M10.11 8.9h4.76' stroke='currentColor' />
      <path d='M12.49 13.04v9.27' stroke='currentColor' />
    </svg>
  )
}
