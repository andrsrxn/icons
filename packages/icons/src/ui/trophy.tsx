import type { Icon } from './types'

export const IconTrophy: Icon = ({
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
      data-slot='icon-ui-trophy'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.47 11.98c0 2.16 2.93 3.8 4.53 4.55.64.3 1.36.3 2 0 1.6-.74 4.53-2.4 4.53-4.55V3.81a2 2 0 0 0-2-2H8.47a2 2 0 0 0-2 2z'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M8.47 19.93c0-.76 2.16-1.97 3.1-2.46a1 1 0 0 1 .86 0c.94.5 3.1 1.7 3.1 2.46v1.34a1 1 0 0 1-1 1H9.47a1 1 0 0 1-1-1z'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M6.47 11.98c0 1.76 1.96 3.19 3.55 4.06.81.44 1.21.66 1.98.66s1.17-.22 1.98-.66c1.59-.87 3.55-2.3 3.55-4.06V5.81c0-1.88 0-2.82-.59-3.41s-1.53-.59-3.41-.59h-3.06c-1.88 0-2.82 0-3.41.59s-.59 1.53-.59 3.41z'
        stroke='currentColor'
      />
      <path
        d='M8.47 19.8c0-.7 1.6-1.75 2.64-2.36.41-.24.62-.36.89-.36s.48.12.9.36c1.04.61 2.63 1.65 2.63 2.35v.48c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-3.06c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7z'
        stroke='currentColor'
      />
      <path
        d='m17.79 12.5.9-.44c.86-.42 1.3-.63 1.62-.94a3 3 0 0 0 .82-1.31c.13-.43.13-.9.13-1.87 0-.99 0-1.49-.17-1.87a2 2 0 0 0-1.02-1.02c-.39-.17-.88-.17-1.87-.17h-.41'
        stroke='currentColor'
      />
      <path
        d='M6.21 12.43 5.3 12c-.83-.41-1.25-.61-1.57-.9a3 3 0 0 1-.86-1.37c-.12-.42-.12-.88-.12-1.82s0-1.43.16-1.8a2 2 0 0 1 1.05-1.06c.38-.16.86-.16 1.82-.16h.44'
        stroke='currentColor'
      />
    </svg>
  )
}
