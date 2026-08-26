import type { Icon } from './types'

export const IconBookLock: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-book-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.83 6.67c0-1.89 0-2.83.59-3.42s1.53-.58 3.41-.58h8.34c1.88 0 2.82 0 3.41.58.59.59.59 1.53.59 3.42v7.24c0 1.88 0 2.82-.59 3.4-.59.6-1.53.6-3.41.6H7.83c-1.88 0-2.82 0-3.41-.6-.59-.58-.59-1.52-.59-3.4zM14.26 8.7c.26.32.4.47.5.65a2 2 0 0 1 .2.57c.04.2.04.4.04.8v.14c0 .97 0 1.45-.16 1.83a2 2 0 0 1-1.13 1.09 5 5 0 0 1-1.83.08 5 5 0 0 1-1.7-.21 2 2 0 0 1-1.04-1.08c-.14-.36-.14-.8-.14-1.7v-.09c0-.5 0-.76.06-1a2 2 0 0 1 .35-.72c.14-.2.34-.35.73-.67l.1-.09q.18-.14.32-.32l.14-.18a1.77 1.77 0 0 1 2.72-.1z'
        fill='currentColor'
      />
      <path
        d='M3.83 8.67c0-2.83 0-4.25.88-5.12s2.3-.88 5.12-.88h4.34c2.82 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v3.24c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H3.83z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.83 17.9c0 1.34 0 2 .31 2.5a2 2 0 0 0 .63.63c.49.3 1.16.3 2.5.3h8.04c1.34 0 2 0 2.5-.3a2 2 0 0 0 .62-.63c.3-.5.3-1.16.3-2.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='8.74'
        y='9.27'
        width='6.52'
        height='4.87'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m13.84 9.27-.16-1.37a1.66 1.66 0 0 0-3.3-.01l-.18 1.38'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
