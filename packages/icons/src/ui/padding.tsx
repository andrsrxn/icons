import type { Icon } from './types'

export const IconPadding: Icon = ({
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
      data-slot='icon-ui-padding'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.38 2.62c1.41 0 2.12 0 2.56.44s.44 1.15.44 2.56v12.76c0 1.41 0 2.12-.44 2.56s-1.15.44-2.56.44H5.62c-1.41 0-2.12 0-2.56-.44s-.44-1.15-.44-2.56V5.62c0-1.41 0-2.12.44-2.56s1.15-.44 2.56-.44zm-3.44 15.21c1.41 0 2.12 0 2.56-.44s.44-1.14.44-2.56V9.16c0-1.41 0-2.12-.44-2.56s-1.15-.44-2.56-.44H9.1c-1.42 0-2.12 0-2.56.44S6.1 7.75 6.1 9.16v5.67c0 1.42 0 2.12.44 2.56s1.14.44 2.56.44z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M21.38 15.38V8.62c0-2.83 0-4.25-.88-5.13s-2.3-.87-5.12-.87H8.61c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v6.76c0 2.83 0 4.25.88 5.13s2.3.87 5.12.87h6.77c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.13'
        stroke='currentColor'
      />
      <path d='M8.15 6.02H8c-.94 0-1.41 0-1.7.29S6 7.07 6 8v.1' stroke='currentColor' />
      <path d='M15.84 6.02H16c.94 0 1.41 0 1.7.29.3.3.3.76.3 1.7v.1' stroke='currentColor' />
      <path d='M8.15 17.98H8c-.94 0-1.41 0-1.7-.29-.3-.3-.3-.76-.3-1.7v-.1' stroke='currentColor' />
      <path d='M15.84 17.98H16c.94 0 1.41 0 1.7-.29.3-.3.3-.76.3-1.7v-.1' stroke='currentColor' />
      <path d='M6.04 11.05v1.86' stroke='currentColor' />
      <path d='M17.95 11.05v1.86' stroke='currentColor' />
      <path d='M11.19 17.97h1.61' stroke='currentColor' />
      <path d='M11.19 6.02h1.61' stroke='currentColor' />
    </svg>
  )
}
