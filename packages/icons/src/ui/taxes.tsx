import type { Icon } from './types'

export const IconTaxes: Icon = ({
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
      data-slot='icon-ui-taxes'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.15 20.43c1.36.87 2.04 1.31 2.56 1.03s.52-1.1.52-2.71V8.52c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H9.77c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v10.21c0 1.61 0 2.42.52 2.7l.02.02c.52.27 1.2-.17 2.54-1.06.47-.3.7-.46.97-.47h.02c.26-.02.51.11 1.01.37l2.22 1.15c.46.23.68.35.93.35.24 0 .47-.12.92-.36l2.15-1.13c.5-.26.76-.4 1.03-.39s.5.17.99.48zm-2.25-4.78a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14m-4.23-7.37a1.57 1.57 0 1 1-3.14 0 1.57 1.57 0 0 1 3.14 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='m16.1 7.08-8.25 8.25' stroke='currentColor' />
      <circle cx='9.1' cy='8.26' r='1.48' stroke='currentColor' />
      <circle cx='14.9' cy='14.16' r='1.48' stroke='currentColor' />
      <path
        d='m14.94 20.38-2.04 1.04c-.44.22-.66.33-.9.33s-.46-.11-.9-.33l-2.07-1.04c-.5-.26-.76-.38-1.03-.37s-.5.18-.98.5l-.13.09c-1.37.92-2.06 1.38-2.59 1.1-.53-.29-.53-1.11-.53-2.76V8.52c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h4.46c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v10.43c0 1.64 0 2.47-.53 2.75s-1.21-.17-2.58-1.09l-.16-.1c-.48-.32-.71-.48-.98-.5-.27-.01-.53.12-1.04.37'
        stroke='currentColor'
      />
    </svg>
  )
}
