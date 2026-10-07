import type { Icon } from './types'

export const IconSelectionScissors: Icon = ({
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
      data-slot='icon-ui-selection-scissors'
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
        d='M15.3 2.7c2.83 0 4.25 0 5.13.87.88.88.88 2.3.88 5.12v5.37c0 .44-.19.85-.5 1.14l-.49.44c-.6.55-.43 1.54.31 1.86.41.18.68.58.68 1.03v.65c0 1.18-.95 2.13-2.13 2.13h-.36a1.4 1.4 0 0 1-1.09-.52l-.28-.35a1.12 1.12 0 0 0-1.88.23c-.19.39-.58.64-1.02.64H8.7c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.69c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h6.62'
        fill='currentColor'
      />
      <path d='M6.03 2.66h-.08l-.45.01a3 3 0 0 0-2.8 2.8v.45' stroke='currentColor' />
      <path d='M17.98 2.66h.07l.45.01a3 3 0 0 1 2.8 2.8v.45' stroke='currentColor' />
      <path d='M6.03 21.24H5.5a3 3 0 0 1-2.8-2.8V18' stroke='currentColor' />
      <path d='M2.76 10.14v3.57' stroke='currentColor' />
      <path d='M21.24 10.14v1.05' stroke='currentColor' />
      <path d='M10.22 21.14h1.24' stroke='currentColor' />
      <path d='M10.22 2.67h3.57' stroke='currentColor' />
      <path d='M17.8 22.2a1.63 1.63 0 0 0 0-2.32 1.63 1.63 0 1 0 0 2.31' stroke='currentColor' />
      <path d='M22.18 17.8a1.63 1.63 0 0 0 0-2.31 1.63 1.63 0 1 0 0 2.31' stroke='currentColor' />
      <path d='m11.46 15.85 7.82.64' stroke='currentColor' />
      <path d='m16.41 19.35-.63-7.82' stroke='currentColor' />
    </svg>
  )
}
