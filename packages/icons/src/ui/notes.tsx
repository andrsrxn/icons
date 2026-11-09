import type { Icon } from './types'

export const IconNotes: Icon = ({
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
      data-slot='icon-ui-notes'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.9 21.46c2.83 0 4.25 0 5.13-.88s.88-2.3.88-5.12V9.65c0-2.83 0-4.25-.88-5.12s-2.3-.88-5.12-.88H9.09c-2.82 0-4.24 0-5.12.88-.88.87-.88 2.29-.88 5.12v5.8c0 2.84 0 4.25.88 5.13s2.3.88 5.12.88z'
        fill='currentColor'
      />
      <path
        d='M3.1 13.46v-1.81c0-3.77 0-5.66 1.17-6.83s3.05-1.17 6.82-1.17h1.82c3.77 0 5.65 0 6.82 1.17 1.18 1.17 1.18 3.06 1.18 6.83v1.8c0 3.78 0 5.67-1.18 6.84-1.17 1.17-3.05 1.17-6.82 1.17h-1.82c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.06-1.18-6.83'
        stroke='currentColor'
      />
      <path d='M7.56 11.33h8.88' stroke='currentColor' />
      <path d='M7.56 15.73h5.5' stroke='currentColor' />
      <path d='M12 5.3V2' stroke='currentColor' />
      <path d='M7.6 5.3V2' stroke='currentColor' />
      <path d='M16.4 5.3V2' stroke='currentColor' />
    </svg>
  )
}
