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
        d='m16.41 17.35-.12-2.17c-.1-1.72-.15-2.57.38-2.88s1.25.16 2.7 1.09l1.82 1.18c.62.4.93.6 1.04.76a1 1 0 0 1-.34 1.44c-.17.1-.54.14-1.27.22-.27.03-.4.04-.53.08a2 2 0 0 0-.97.55c-.09.1-.17.2-.33.43h0c-.43.58-.64.87-.8.98a1 1 0 0 1-1.43-.42c-.09-.18-.1-.54-.15-1.26'
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
        d='M9.97 17.28c-5.31-1.42-8.82-5.56-7.83-9.25.98-3.68 6.1-5.52 11.4-4.1 5.32 1.43 8.83 5.57 7.84 9.26 0 0-.09.29-.32.75'
        stroke='currentColor'
      />
      <path
        d='M8.26 20.55c-2.56-.33-4.17-3.46-2.02-6.14 2.31-2.9 5.65-1.72 6.47.23.78 1.86-.86 3.22-3.01 2.57'
        stroke='currentColor'
      />
    </svg>
  )
}
