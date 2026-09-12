import type { Icon } from './types'

export const IconCreditCardCheck: Icon = ({
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
      data-slot='icon-ui-credit-card-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.83 7.93c0-1.6 0-2.4.43-2.95a2 2 0 0 1 .33-.32c.55-.44 1.35-.44 2.95-.44h12.59c1.6 0 2.4 0 2.94.44q.18.14.33.32c.43.55.43 1.35.43 2.95 0 .8 0 1.2-.22 1.47l-.16.16c-.27.22-.67.22-1.47.22H3.68c-.8 0-1.2 0-1.47-.22l-.16-.16c-.22-.27-.22-.67-.22-1.47'
        fill='currentColor'
      />
      <path
        d='M13.42 19.78H7.66c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-3.56c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h8.68c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v2.03'
        stroke='currentColor'
      />
      <path d='M1.66 9.38H22' stroke='currentColor' />
      <path d='M4.97 12.84H10' stroke='currentColor' />
      <path
        d='m16.71 18.5.46.55c.72.88 1.08 1.32 1.55 1.32.48 0 .84-.44 1.55-1.32l2.7-3.33'
        stroke='currentColor'
      />
    </svg>
  )
}
