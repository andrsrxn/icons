import type { Icon } from './types'

export const IconBedsideTable: Icon = ({
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
      data-slot='icon-ui-bedside-table'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.58 7.4v7.42c0 2.83 0 4.25-.88 5.13-.87.87-2.29.87-5.12.87H8.42c-2.83 0-4.25 0-5.12-.87-.88-.88-.88-2.3-.88-5.13V7.4z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M2.41 7.4h19.17' stroke='currentColor' />
      <path d='M12 20.83V7.4' stroke='currentColor' />
      <path d='M8.53 13.61v-2.8' stroke='currentColor' />
      <path d='M15.45 13.61v-2.8' stroke='currentColor' />
      <path
        d='M2.42 12.82V9.66c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h3.16c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.78 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17s-1.17-3.05-1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='M3.55 21.83a.8.8 0 0 0 .23 1.06.7.7 0 0 0 1-.22l-.61-.42zm2.1-.58a.8.8 0 0 0-.23-1.07.7.7 0 0 0-1 .22l.62.42zm-1.48 1 .62.42.87-1.42-.62-.43-.63-.42-.86 1.43z'
        fill='currentColor'
      />
      <path
        d='M20.54 21.83a.8.8 0 0 1-.23 1.06.7.7 0 0 1-1-.22l.61-.42zm-2.1-.58a.8.8 0 0 1 .23-1.07.7.7 0 0 1 1 .22l-.61.42zm1.48 1-.62.42-.87-1.42.63-.43.62-.42.86 1.43z'
        fill='currentColor'
      />
    </svg>
  )
}
