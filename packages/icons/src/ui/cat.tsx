import type { Icon } from './types'

export const IconCat: Icon = ({
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
      data-slot='icon-ui-cat'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='m4.15 2.7 4.43 1.46a9 9 0 0 1 6.78 0L19.7 2.7l1.4 1.46-.75 5.1q.57 1.5.58 3.18A8.95 8.95 0 1 1 3.6 9.26L2.85 4.7zm7.96 15.08 1.89-2.1-.41-1.44-3.49.23-.16 1.35z'
        fill='currentColor'
      />
      <path d='M8.11 20.42q1.76.73 3.86.75 2.1-.02 3.86-.75' stroke='currentColor' />
      <path d='M9.12 4.47a8.3 8.3 0 0 1 5.7 0' stroke='currentColor' />
      <path
        d='M14.85 4.46a7 7 0 0 1 3.03-1.43c1.16-.28 1.74-.42 2.5.18s.77 1.16.77 2.29q.01.8-.14 1.7c-.16.87-.24 1.31-.25 1.47 0 .16.09.78.26 2q.08.64.07 1.52'
        stroke='currentColor'
      />
      <path
        d='M9.1 4.46a7 7 0 0 0-3.04-1.43c-1.16-.28-1.73-.42-2.5.18-.76.6-.76 1.16-.77 2.29q-.01.8.14 1.7c.16.85.24 1.27.24 1.43s-.08.78-.25 2.03c-.06.42-.07.86-.07 1.44'
        stroke='currentColor'
      />
      <path
        d='M8.92 10.23a.57.57 0 1 1-1.15 0 .57.57 0 0 1 1.15 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.17 10.23a.57.57 0 1 1-1.15 0 .57.57 0 0 1 1.15 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.2 14.05c-.61 0-1.05.4-1.2.61-.15-.2-.59-.61-1.2-.61-.78 0-1.35.78-1.1 1.6.24.82 1.1 1.6 2.3 2.08 1.2-.39 2.06-1.26 2.3-2.08.25-.82-.32-1.6-1.1-1.6'
        stroke='currentColor'
      />
      <path d='m18.27 15.03 4.08.31' stroke='currentColor' />
      <path d='m5.67 15.03-3.9.31' stroke='currentColor' />
      <path
        d='M17.21 17.03a.7.7 0 0 0-.89.5c-.1.41.15.84.55.96l.17-.73zm3.67 2.68c.4.12.8-.1.89-.5a.8.8 0 0 0-.55-.96l-.17.73zm-3.84-1.95-.17.73 4.01 1.22.17-.73.17-.73-4-1.22z'
        fill='currentColor'
      />
      <path
        d='M6.73 17.03c.4-.12.8.1.89.5.1.41-.15.84-.55.96l-.17-.73zM3.11 19.7c-.4.12-.8-.1-.89-.5a.8.8 0 0 1 .55-.96l.17.73zm3.8-1.95.16.73-3.96 1.22-.17-.73-.17-.73 3.96-1.22z'
        fill='currentColor'
      />
    </svg>
  )
}
