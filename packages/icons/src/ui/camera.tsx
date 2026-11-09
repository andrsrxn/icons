import type { Icon } from './types'

export const IconCamera: Icon = ({
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
      data-slot='icon-ui-camera'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.66 4.87a2.5 2.5 0 0 1-2.05 1.07h-.44c-.31 0-.47 0-.6.02a3 3 0 0 0-2.73 2.72v5.55c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.12.88h8.34c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V9.45c0-.47 0-.7-.03-.9a3 3 0 0 0-2.57-2.58c-.2-.03-.44-.03-.9-.03h-.31A3 3 0 0 1 16.24 5l-.1-.12-.11-.12a3 3 0 0 0-2.12-.95H9.7c-.8 0-1.57.4-2.04 1.07m4.34 12a3.97 3.97 0 1 1 0-7.93 3.97 3.97 0 0 1 0 7.94'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M12 3.42h2.15c.98 0 1.9.51 2.4 1.35l.07.13a2.5 2.5 0 0 0 2.17 1.23 3.37 3.37 0 0 1 3.38 3.37v3.68c0 2.85 0 4.28-.7 5.3a4 4 0 0 1-1.05 1.05c-1.02.7-2.44.7-5.3.7H8.88c-2.86 0-4.28 0-5.3-.7a4 4 0 0 1-1.05-1.05c-.7-1.02-.7-2.45-.7-5.3V9.5A3.37 3.37 0 0 1 5.2 6.13c.9 0 1.72-.47 2.17-1.24l.07-.12c.5-.84 1.4-1.35 2.38-1.35z'
        stroke='currentColor'
      />
      <path
        d='M19.15 9.53a.44.44 0 1 1-.9 0 .44.44 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <circle cx='12' cy='12.91' r='3.97' stroke='currentColor' />
    </svg>
  )
}
