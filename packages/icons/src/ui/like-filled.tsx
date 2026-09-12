import type { Icon } from './types'

export const IconLikeFilled: Icon = ({
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
      data-slot='icon-ui-like-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M4.46 21.08c-.6 0-.9 0-1.16-.07a2 2 0 0 1-1.43-1.43c-.06-.24-.06-.55-.06-1.15v-5.55c0-.6 0-.91.06-1.16a2 2 0 0 1 1.43-1.43c.25-.06.55-.06 1.16-.06l.29.01a.5.5 0 0 1 .35.36q.02.08.02.29v9.53q0 .2-.02.29a.5.5 0 0 1-.35.35c-.07.02-.14.02-.3.02'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.74 21.07H9.92c-.95 0-1.42 0-1.71-.28-.3-.3-.3-.77-.3-1.71v-8.15c0-.53 0-.8.06-1.04s.2-.5.48-1.03c.35-.67.78-1.56.98-2.29.16-.53.23-1.11.26-1.65.05-1.02.08-1.53.41-1.8.33-.29.71-.24 1.47-.15.88.1 1.83.41 2.3 1.2.53.9.55 2.2.4 3.37-.17 1.38-.25 2.06.05 2.4s.91.34 2.15.34h.8c2.79 0 4.18 0 4.77.91.59.92.02 2.19-1.12 4.73l-.72 1.6c-.77 1.72-1.15 2.58-1.9 3.06-.74.48-1.68.48-3.56.49'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
