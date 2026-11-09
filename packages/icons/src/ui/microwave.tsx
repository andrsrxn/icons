import type { Icon } from './types'

export const IconMicrowave: Icon = ({
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
      data-slot='icon-ui-microwave'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.7 11c0 3 0 4.5.76 5.56a4 4 0 0 0 .87.87c1.06.77 2.56.77 5.57.77h6.2c3 0 4.51 0 5.57-.77a4 4 0 0 0 .87-.87c.77-1.05.77-2.56.77-5.57s0-4.52-.77-5.57a4 4 0 0 0-.87-.87c-1.06-.77-2.56-.77-5.57-.77H8.9c-3 0-4.51 0-5.57.77a4 4 0 0 0-.87.87c-.77 1.05-.77 2.56-.77 5.57m11.7-3.74c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v3.33c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H7.25c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7V9.26c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.9 18.2h6.2c3 0 4.51 0 5.57-.77a4 4 0 0 0 .87-.87c.77-1.05.77-2.56.77-5.57s0-4.52-.77-5.57a4 4 0 0 0-.87-.87c-1.06-.77-2.56-.77-5.57-.77H8.9c-3 0-4.51 0-5.57.77a4 4 0 0 0-.87.87c-.77 1.05-.77 2.56-.77 5.57s0 4.52.77 5.57a4 4 0 0 0 .87.87c1.06.77 2.56.77 5.57.77'
        stroke='currentColor'
      />
      <path
        d='M8.98 14.93h2.62c1.83 0 2.74 0 3.32-.55l.07-.07c.55-.58.55-1.49.55-3.32s0-2.74-.55-3.32l-.07-.07c-.58-.55-1.5-.55-3.32-.55H8.98c-1.83 0-2.74 0-3.32.55l-.07.07c-.55.58-.55 1.5-.55 3.32h0c0 1.83 0 2.74.55 3.32l.07.07c.58.55 1.5.55 3.32.55'
        stroke='currentColor'
      />
      <path
        d='M2.55 19.8a.8.8 0 0 0 .23 1.06.7.7 0 0 0 1.01-.22l-.62-.42zm2.47-1.18a.8.8 0 0 0-.23-1.06.7.7 0 0 0-1.01.22l.62.42zm-1.85 1.6.62.42 1.23-2.02-.62-.42-.62-.42-1.23 2.02z'
        fill='currentColor'
      />
      <path
        d='M21.45 19.8a.8.8 0 0 1-.23 1.06.7.7 0 0 1-1.01-.22l.62-.42zm-2.47-1.18a.8.8 0 0 1 .23-1.06.7.7 0 0 1 1.01.22l-.62.42zm1.85 1.6-.62.42-1.23-2.02.62-.42.62-.42 1.23 2.02z'
        fill='currentColor'
      />
      <path d='M18.96 13.41V8.57' stroke='currentColor' />
    </svg>
  )
}
