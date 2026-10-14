import type { Icon } from './types'

export const IconWashingMachine: Icon = ({
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
      data-slot='icon-ui-washing-machine'
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
        d='M15.58 1.89c2.83 0 4.25 0 5.12.88s.88 2.29.88 5.12v6.93c0 2.83 0 4.25-.88 5.13-.87.87-2.29.87-5.12.87H8.42c-2.83 0-4.25 0-5.12-.87-.88-.88-.88-2.3-.88-5.13V7.9c0-2.83 0-4.24.88-5.12.87-.88 2.29-.88 5.12-.88zm1.05 11.18a4.63 4.63 0 1 1-9.26 0 4.63 4.63 0 0 1 9.26 0'
        fill='currentColor'
      />
      <path d='M8.07 5.02h7.86' stroke='currentColor' />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='matrix(0 -1 -1 0 21.58 20.82)'
        stroke='currentColor'
      />
      <circle cx='12' cy='13.25' r='4.63' stroke='currentColor' />
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
