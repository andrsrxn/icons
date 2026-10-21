import type { Icon } from './types'

export const IconScissorsComb: Icon = ({
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
      data-slot='icon-ui-scissors-comb'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.74 20.17a2.03 2.03 0 1 0 0-4.05 2.03 2.03 0 0 0 0 4.05'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M11.45 20.17a2.03 2.03 0 1 0 0-4.05 2.03 2.03 0 0 0 0 4.05'
        fill='currentColor'
      />
      <path d='M3.74 20.17a2.03 2.03 0 1 1 0-4.05 2.03 2.03 0 0 1 0 4.05' stroke='currentColor' />
      <path d='M11.45 20.17a2.03 2.03 0 1 1 0-4.05 2.03 2.03 0 0 1 0 4.05' stroke='currentColor' />
      <path d='m10.05 16.47-6.3-7.42' stroke='currentColor' />
      <path d='m11.33 9.05-6.3 7.42' stroke='currentColor' />
      <rect
        opacity='.2'
        width='15.99'
        height='2.86'
        rx='1'
        transform='matrix(0 -1 .99957 -.02944 19.28 20.07)'
        fill='currentColor'
      />
      <path
        d='M16.29 20.17c2.82 0 4.24 0 5.11-.88h.01c.88-.88.88-2.3.88-5.12V9.82c0-2.82 0-4.23-.88-5.1V4.7c-.88-.88-2.3-.88-5.12-.88'
        stroke='currentColor'
      />
      <path d='M19.29 4.1v15.8' stroke='currentColor' />
      <path d='M16.29 7.89h3' stroke='currentColor' />
      <path d='M6 6.56v-3' stroke='currentColor' />
      <path d='M9.15 5.31V3.56' stroke='currentColor' />
      <path d='M16.29 12h3' stroke='currentColor' />
      <path d='M16.29 16.11h3' stroke='currentColor' />
    </svg>
  )
}
