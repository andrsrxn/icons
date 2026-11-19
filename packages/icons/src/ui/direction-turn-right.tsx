import type { Icon } from './types'

export const IconDirectionTurnRight: Icon = ({
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
      data-slot='icon-ui-direction-turn-right'
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
      <path
        d='M16.17 11.25h-4.62c-1.34 0-2.01 0-2.53.25q-.77.38-1.16 1.16c-.25.52-.25 1.19-.25 2.52'
        stroke='currentColor'
      />
      <path
        d='m13.93 7.7 1.41 1.42c1 1 1.5 1.5 1.5 2.13s-.5 1.12-1.5 2.12l-1.41 1.42'
        stroke='currentColor'
      />
    </svg>
  )
}
