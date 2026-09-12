import type { Icon } from './types'

export const IconEraser: Icon = ({
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
      data-slot='icon-ui-eraser'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.58 3.95c-.66-.66-.98-.98-1.33-1.18a3 3 0 0 0-3 0c-.34.2-.67.52-1.32 1.18-.22.22-.33.33-.4.44a1 1 0 0 0 0 1c.07.12.18.23.4.44l7.24 7.24c.21.22.32.33.44.4a1 1 0 0 0 1 0c.11-.07.22-.18.44-.4a7 7 0 0 0 1.18-1.32 3 3 0 0 0 0-3c-.2-.35-.52-.67-1.18-1.33z'
        fill='currentColor'
      />
      <rect
        width='18.88'
        height='13.64'
        rx='3'
        transform='scale(1 -1)rotate(45 33.44 .5)'
        stroke='currentColor'
      />
      <path d='m9.73 4.63 9.64 9.64' stroke='currentColor' />
    </svg>
  )
}
