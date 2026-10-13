import type { Icon } from './types'

export const IconLassoCursor: Icon = ({
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
      data-slot='icon-ui-lasso-cursor'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m16.47 17.67-.35-2.14c-.29-1.7-.43-2.55.06-2.91.5-.37 1.27.02 2.8.79l1.95.97c.65.33.98.5 1.11.65a1 1 0 0 1-.18 1.47c-.16.11-.52.2-1.24.35-.27.06-.4.1-.52.14a2 2 0 0 0-.9.66c-.08.1-.15.22-.29.46h0c-.36.62-.54.94-.7 1.06a1 1 0 0 1-1.46-.27c-.1-.17-.16-.52-.28-1.23'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.14 8.03c-1 3.69 2.52 7.83 7.83 9.25 2.52.68 5 .62 7-.02l-.68-4.61 4.8 1.33q.18-.38.3-.8c.98-3.68-2.53-7.82-7.84-9.24-5.32-1.43-10.43.4-11.41 4.1'
        fill='currentColor'
      />
      <path
        d='M9.97 17.28c-5.31-1.42-8.82-5.56-7.83-9.25.98-3.68 6.1-5.52 11.4-4.1 4.5 1.21 7.05 3.96 7.86 6.98'
        stroke='currentColor'
      />
      <path
        d='M8.26 20.55c-2.56-.33-4.17-3.46-2.02-6.14 2.31-2.9 5.66-1.72 6.47.23.78 1.86-.86 3.22-3.01 2.57'
        stroke='currentColor'
      />
    </svg>
  )
}
