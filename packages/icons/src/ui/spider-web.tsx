import type { Icon } from './types'

export const IconSpiderWeb: Icon = ({
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
      data-slot='icon-ui-spider-web'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12 22.44V1.56' stroke='currentColor' />
      <path d='M2.59 17.43 21.4 6.56' stroke='currentColor' />
      <path d='M21.4 17.43 2.58 6.56' stroke='currentColor' />
      <path d='M3.93 7.17 12 2.51' stroke='currentColor' />
      <path d='M3.93 16.83 12 21.49' stroke='currentColor' />
      <path d='M20.07 7.17 12 2.51' stroke='currentColor' />
      <path d='M20.07 16.83V7.17' stroke='currentColor' />
      <path d='M3.93 16.83V7.17' stroke='currentColor' />
      <path d='M20.07 16.83 12 21.49' stroke='currentColor' />
      <path d='M7.28 9.18 12 6.45' stroke='currentColor' />
      <path d='M7.28 14.82 12 17.55' stroke='currentColor' />
      <path d='M16.72 9.18 12 6.45' stroke='currentColor' />
      <path d='M16.72 14.82V9.18' stroke='currentColor' />
      <path d='M7.28 14.82V9.18' stroke='currentColor' />
      <path d='M16.72 14.82 12 17.55' stroke='currentColor' />
      <path
        opacity='.2'
        d='M20.4 9.34c0-1.15 0-1.72-.27-2.19-.28-.47-.78-.75-1.78-1.3l-4.4-2.46c-.95-.53-1.43-.8-1.95-.8s-1 .27-1.95.8l-4.4 2.45c-1 .56-1.5.84-1.77 1.31-.28.47-.28 1.04-.28 2.19v5.24c0 1.09 0 1.63.25 2.08s.71.74 1.63 1.31l4.4 2.75c1.03.65 1.55.97 2.12.97s1.09-.32 2.12-.97l4.4-2.75c.92-.57 1.38-.86 1.63-1.3.25-.46.25-1 .25-2.09z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
