import type { Icon } from './types'

export const IconPram: Icon = ({
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
      data-slot='icon-ui-pram'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12.9 10.68c.43 0 .65 0 .85-.09s.34-.25.63-.57l3.19-3.52c.78-.87 1.18-1.3 1.66-1.27.49.03.82.52 1.47 1.49l.12.17c.16.23.24.35.28.48s.05.26.06.54l.18 3.33c.02.38.03.58-.03.76s-.18.33-.43.62l-1.23 1.47c-.29.35-.43.52-.63.62s-.42.1-.88.1L5.76 15c-.35 0-.52 0-.68-.05s-.3-.15-.57-.37l-.68-.52c-.3-.22-.44-.34-.53-.49l-.05-.07c-.08-.16-.1-.35-.14-.72-.1-.92-.16-1.38.07-1.7l.12-.13c.3-.27.76-.27 1.68-.27z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M7.1 22.23a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M17.5 22.23a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2'
        fill='currentColor'
      />
      <path d='M7.1 22.23a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2' stroke='currentColor' />
      <path d='M17.5 22.23a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2' stroke='currentColor' />
      <path d='M15.82 18.02 6.09 4.07a1.92 1.92 0 0 0-3.27 2.02l.28.52' stroke='currentColor' />
      <path d='m10.2 14.96-2.23 3.06' stroke='currentColor' />
      <path d='m19.8 5.1-5.93 5.46' stroke='currentColor' />
      <path
        d='M16.8 14.96H5.63a3 3 0 0 1-2.93-2.93v-.2a1 1 0 0 1 .97-.98h8.5c.95 0 1.42 0 1.71-.3.3-.29.3-.76.3-1.7V3.77c0-.99 0-1.48.4-1.78s.79-.18 1.57.06c4.1 1.24 5.25 6.27 5.25 8.31 0 .56 0 .83-.03 1.07a4 4 0 0 1-3.5 3.5c-.23.03-.51.03-1.07.03'
        stroke='currentColor'
      />
    </svg>
  )
}
