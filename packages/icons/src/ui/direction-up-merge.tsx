import type { Icon } from './types'

export const IconDirectionUpMerge: Icon = ({
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
      data-slot='icon-ui-direction-up-merge'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7 5.77c2.35-2.4 3.53-3.6 5-3.6s2.65 1.2 5 3.6l.6.62.63.61c2.4 2.35 3.6 3.53 3.6 5s-1.2 2.65-3.6 5l-.62.6-.61.63c-2.35 2.4-3.53 3.6-5 3.6s-2.65-1.2-5-3.6l-.6-.62-.63-.61c-2.4-2.35-3.6-3.53-3.6-5s1.2-2.65 3.6-5l.62-.6z'
        fill='currentColor'
      />
      <path
        d='M17.73 6.27 17 5.52c-2.35-2.4-3.53-3.6-5-3.6s-2.65 1.2-5 3.6l-.73.75-.75.73c-2.4 2.35-3.6 3.53-3.6 5s1.2 2.65 3.6 5l.75.73.73.75c2.35 2.4 3.53 3.6 5 3.6s2.65-1.2 5-3.6l.73-.75.75-.73c2.4-2.35 3.6-3.53 3.6-5s-1.2-2.65-3.6-5z'
        stroke='currentColor'
      />
      <path d='M11.63 16.62V8.28' stroke='currentColor' />
      <path d='m15.1 15.96-3.38-3.75' stroke='currentColor' />
      <path
        d='M7.82 10.69 9.51 9c1-1 1.5-1.5 2.12-1.5s1.12.5 2.12 1.5l1.7 1.69'
        stroke='currentColor'
      />
    </svg>
  )
}
