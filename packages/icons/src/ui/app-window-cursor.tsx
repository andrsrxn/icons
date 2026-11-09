import type { Icon } from './types'

export const IconAppWindowCursor: Icon = ({
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
      data-slot='icon-ui-app-window-cursor'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m14.64 16.66.98 2.99c.38 1.14.57 1.71.84 1.9a1 1 0 0 0 1.1.03c.28-.17.5-.74.94-1.86.16-.42.24-.64.37-.82a2 2 0 0 1 .54-.55c.18-.12.4-.2.82-.37 1.14-.45 1.71-.67 1.89-.96a1 1 0 0 0-.04-1.09c-.2-.27-.77-.46-1.94-.84l-3-.96c-1.63-.53-2.45-.79-2.88-.35-.43.43-.16 1.25.38 2.88'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M22.15 11.03c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17H9.17c-3.24 0-4.86 0-5.96.88a4 4 0 0 0-.62.63c-.88 1.1-.87 2.72-.86 5.96.01 3.22.02 4.83.9 5.92a4 4 0 0 0 .62.62c1.1.87 2.7.87 5.92.87h5.68l-.84-3.83 1.06-.68 7.08 2.69z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M22.2 11.34v-.31c0-3.77 0-5.66-1.18-6.83-1.17-1.17-3.06-1.17-6.83-1.17H9.23c-3.26 0-4.88 0-5.99.9a4 4 0 0 0-.59.58c-.89 1.1-.89 2.73-.89 5.99 0 3.25 0 4.88.9 5.98a4 4 0 0 0 .58.6c1.1.88 2.73.88 5.99.88h1.76'
        stroke='currentColor'
      />
      <path
        d='M6.62 7.28a.54.54 0 1 1-1.07 0 .54.54 0 0 1 1.07 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.7 7.28a.54.54 0 1 1-1.08 0 .54.54 0 0 1 1.08 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.77 7.28a.54.54 0 1 1-1.07 0 .54.54 0 0 1 1.07 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
