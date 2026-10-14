import type { Icon } from './types'

export const IconCreditCardIn: Icon = ({
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
      data-slot='icon-ui-credit-card-in'
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
        d='M12.72 19.78H7.66c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-3.56c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h8.68c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v1.83'
        stroke='currentColor'
      />
      <path d='M1.66 9.38H22' stroke='currentColor' />
      <path d='M4.97 12.84H10' stroke='currentColor' />
      <path d='M19.17 21.55v-6.28' stroke='currentColor' />
      <path
        d='M15.78 17.27 17.05 16c1-1 1.5-1.5 2.12-1.5s1.12.5 2.12 1.5l1.27 1.27'
        stroke='currentColor'
      />
    </svg>
  )
}
