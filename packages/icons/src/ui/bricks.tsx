import type { Icon } from './types'

export const IconBricks: Icon = ({
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
      data-slot='icon-ui-bricks'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='2.68'
        y='2.68'
        width='18.64'
        height='18.64'
        rx='2'
        fill='currentColor'
      />
      <rect x='2.68' y='2.68' width='18.64' height='18.64' rx='3' stroke='currentColor' />
      <path d='M2.68 8.5h18.64' stroke='currentColor' />
      <path d='M12 15.5v-7' stroke='currentColor' />
      <path d='M7.39 8.5V2.68' stroke='currentColor' />
      <path d='M7.39 21.32V15.5' stroke='currentColor' />
      <path d='M16.61 8.5V2.68' stroke='currentColor' />
      <path d='M16.61 21.32V15.5' stroke='currentColor' />
      <path d='M2.68 15.5h18.64' stroke='currentColor' />
    </svg>
  )
}
